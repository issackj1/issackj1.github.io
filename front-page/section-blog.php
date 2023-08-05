<div class="front_page_section front_page_section_blog<?php
	$urbanism_scheme = urbanism_get_theme_option( 'front_page_blog_scheme' );
	if ( ! empty( $urbanism_scheme ) && ! urbanism_is_inherit( $urbanism_scheme ) ) {
		echo ' scheme_' . esc_attr( $urbanism_scheme );
	}
	echo ' front_page_section_paddings_' . esc_attr( urbanism_get_theme_option( 'front_page_blog_paddings' ) );
	if ( urbanism_get_theme_option( 'front_page_blog_stack' ) ) {
		echo ' sc_stack_section_on';
	}
?>"
		<?php
		$urbanism_css      = '';
		$urbanism_bg_image = urbanism_get_theme_option( 'front_page_blog_bg_image' );
		if ( ! empty( $urbanism_bg_image ) ) {
			$urbanism_css .= 'background-image: url(' . esc_url( urbanism_get_attachment_url( $urbanism_bg_image ) ) . ');';
		}
		if ( ! empty( $urbanism_css ) ) {
			echo ' style="' . esc_attr( $urbanism_css ) . '"';
		}
		?>
>
<?php
	// Add anchor
	$urbanism_anchor_icon = urbanism_get_theme_option( 'front_page_blog_anchor_icon' );
	$urbanism_anchor_text = urbanism_get_theme_option( 'front_page_blog_anchor_text' );
if ( ( ! empty( $urbanism_anchor_icon ) || ! empty( $urbanism_anchor_text ) ) && shortcode_exists( 'trx_sc_anchor' ) ) {
	echo do_shortcode(
		'[trx_sc_anchor id="front_page_section_blog"'
									. ( ! empty( $urbanism_anchor_icon ) ? ' icon="' . esc_attr( $urbanism_anchor_icon ) . '"' : '' )
									. ( ! empty( $urbanism_anchor_text ) ? ' title="' . esc_attr( $urbanism_anchor_text ) . '"' : '' )
									. ']'
	);
}
?>
	<div class="front_page_section_inner front_page_section_blog_inner
	<?php
	if ( urbanism_get_theme_option( 'front_page_blog_fullheight' ) ) {
		echo ' urbanism-full-height sc_layouts_flex sc_layouts_columns_middle';
	}
	?>
			"
			<?php
			$urbanism_css      = '';
			$urbanism_bg_mask  = urbanism_get_theme_option( 'front_page_blog_bg_mask' );
			$urbanism_bg_color_type = urbanism_get_theme_option( 'front_page_blog_bg_color_type' );
			if ( 'custom' == $urbanism_bg_color_type ) {
				$urbanism_bg_color = urbanism_get_theme_option( 'front_page_blog_bg_color' );
			} elseif ( 'scheme_bg_color' == $urbanism_bg_color_type ) {
				$urbanism_bg_color = urbanism_get_scheme_color( 'bg_color', $urbanism_scheme );
			} else {
				$urbanism_bg_color = '';
			}
			if ( ! empty( $urbanism_bg_color ) && $urbanism_bg_mask > 0 ) {
				$urbanism_css .= 'background-color: ' . esc_attr(
					1 == $urbanism_bg_mask ? $urbanism_bg_color : urbanism_hex2rgba( $urbanism_bg_color, $urbanism_bg_mask )
				) . ';';
			}
			if ( ! empty( $urbanism_css ) ) {
				echo ' style="' . esc_attr( $urbanism_css ) . '"';
			}
			?>
	>
		<div class="front_page_section_content_wrap front_page_section_blog_content_wrap content_wrap">
			<?php
			// Caption
			$urbanism_caption = urbanism_get_theme_option( 'front_page_blog_caption' );
			if ( ! empty( $urbanism_caption ) || ( current_user_can( 'edit_theme_options' ) && is_customize_preview() ) ) {
				?>
				<h2 class="front_page_section_caption front_page_section_blog_caption front_page_block_<?php echo ! empty( $urbanism_caption ) ? 'filled' : 'empty'; ?>"><?php echo wp_kses( $urbanism_caption, 'urbanism_kses_content' ); ?></h2>
				<?php
			}

			// Description (text)
			$urbanism_description = urbanism_get_theme_option( 'front_page_blog_description' );
			if ( ! empty( $urbanism_description ) || ( current_user_can( 'edit_theme_options' ) && is_customize_preview() ) ) {
				?>
				<div class="front_page_section_description front_page_section_blog_description front_page_block_<?php echo ! empty( $urbanism_description ) ? 'filled' : 'empty'; ?>"><?php echo wp_kses( wpautop( $urbanism_description ), 'urbanism_kses_content' ); ?></div>
				<?php
			}

			// Content (widgets)
			?>
			<div class="front_page_section_output front_page_section_blog_output">
				<?php
				if ( is_active_sidebar( 'front_page_blog_widgets' ) ) {
					dynamic_sidebar( 'front_page_blog_widgets' );
				} elseif ( current_user_can( 'edit_theme_options' ) ) {
					if ( ! urbanism_exists_trx_addons() ) {
						urbanism_customizer_need_trx_addons_message();
					} else {
						urbanism_customizer_need_widgets_message( 'front_page_blog_caption', 'ThemeREX Addons - Blogger' );
					}
				}
				?>
			</div>
		</div>
	</div>
</div>
