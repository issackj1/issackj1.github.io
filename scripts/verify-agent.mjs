#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const errors = [];

async function readJson(file) {
  try {
    return JSON.parse(await readFile(path.join(root, file), 'utf8'));
  } catch (error) {
    errors.push(`${file}: invalid JSON (${error.message})`);
    return null;
  }
}

function requireString(item, file, index, key) {
  if (typeof item[key] !== 'string' || item[key].trim() === '') {
    errors.push(`${file}[${index}].${key}: required non-empty string`);
  }
}

function requireUrlish(item, file, index, key) {
  if (!item[key]) return;
  if (typeof item[key] !== 'string' || !/^https?:\/\//.test(item[key])) {
    errors.push(`${file}[${index}].${key}: must be an http(s) URL when present`);
  }
}

function requireAsset(item, file, index) {
  const imageUrl = item.imageUrl;
  if (typeof imageUrl !== 'string' || imageUrl.trim() === '') {
    errors.push(`${file}[${index}].imageUrl: required non-empty string`);
    return;
  }
  if (!imageUrl.startsWith('/assets/')) {
    errors.push(`${file}[${index}].imageUrl: must start with /assets/`);
    return;
  }
  const assetPath = path.join(root, imageUrl.slice(1));
  if (!existsSync(assetPath)) {
    errors.push(`${file}[${index}].imageUrl: missing asset ${imageUrl}`);
  }
}

const projects = await readJson('data/projects.json');
if (Array.isArray(projects)) {
  projects.forEach((project, index) => {
    for (const key of ['title', 'role', 'description', 'liveDemoLink']) {
      requireString(project, 'data/projects.json', index, key);
    }
    if (!Array.isArray(project.techStack) || project.techStack.length === 0) {
      errors.push(`data/projects.json[${index}].techStack: required non-empty array`);
    }
    requireAsset(project, 'data/projects.json', index);
    requireUrlish(project, 'data/projects.json', index, 'liveDemoLink');
    requireUrlish(project, 'data/projects.json', index, 'githubRepoLink');
  });
} else {
  errors.push('data/projects.json: expected array');
}

const releases = await readJson('data/releases.json');
if (Array.isArray(releases)) {
  const seen = new Set();
  let previous = '9999-99-99';
  releases.forEach((release, index) => {
    for (const key of ['id', 'date', 'title', 'description', 'type']) {
      requireString(release, 'data/releases.json', index, key);
    }
    if (seen.has(release.id)) {
      errors.push(`data/releases.json[${index}].id: duplicate id ${release.id}`);
    }
    seen.add(release.id);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(release.date ?? '')) {
      errors.push(`data/releases.json[${index}].date: expected YYYY-MM-DD`);
    }
    if (release.date > previous) {
      errors.push(`data/releases.json[${index}].date: releases should be newest-first`);
    }
    previous = release.date;
    if (!['release', 'pr', 'milestone'].includes(release.type)) {
      errors.push(`data/releases.json[${index}].type: expected release, pr, or milestone`);
    }
    requireUrlish(release, 'data/releases.json', index, 'link');
  });
} else {
  errors.push('data/releases.json: expected array');
}

const stats = await readJson('data/stats.json');
if (stats) {
  for (const key of ['totalProductsShipped', 'liveSystems']) {
    if (!Number.isInteger(stats[key]) || stats[key] < 0) {
      errors.push(`data/stats.json.${key}: expected non-negative integer`);
    }
  }
  for (const key of ['firstReleaseDate', 'latestReleaseDate']) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(stats[key] ?? '')) {
      errors.push(`data/stats.json.${key}: expected YYYY-MM-DD`);
    }
  }
  if (Array.isArray(projects) && stats.totalProductsShipped < projects.length) {
    errors.push('data/stats.json.totalProductsShipped: should be >= number of listed projects');
  }
}

if (errors.length) {
  console.error('Agent readiness checks failed:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Agent readiness checks passed.');
