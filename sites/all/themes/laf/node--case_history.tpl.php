<?php //dpm($content); ?>
<ol class="curtains">

	<li class="first cover">

		<section class="single-case-study animated">
			<div class="half"></div>

			<div class="content top">
				<a href="<?php print url('<front>'); ?>" class="logo"></a>
			</div>

			<div class="content bottom">
				<div class="container-fluid">
					<div class="col-md-12">
						<h1><?php print $title; ?></h1>
					</div>
					<div class="col-md-6">
						<h4><?php print t('Challenge'); ?></h4>
						<p><?php echo $content['field_challenge']['#items'][0]['value']; ?></p>
					</div>
					<div class="col-md-6">
						<h4><?php print t('Inspiration'); ?></h4>
						<p><?php echo $content['field_inspiration']['#items'][0]['value']; ?></p>
					</div>
				</div>
			</div>

		</section>

	</li>

	<li class="case-study-single">

		<?php if(isset($content['field_emotional_gallery']) && is_array($content['field_emotional_gallery']['#items'])): ?>
			<?php
			if( isset($content['field_colore_frecce_emotional']['#items']) ) {
				switch($content['field_colore_frecce_emotional']['#items'][0]['value'] ) {
					case 'chiaro':
						$pallini = "btn-white";
						break;
					case 'verde':
						$pallini = "btn-green";
						break;
					default:
						$pallini = "btn-gray";
				}
			} else {
				$pallini = "btn-white";
			}
			?>
		<div class="img-case-present <?php echo $pallini; ?>">

			<div class="wrapper">
				<ul class="images clearfix">
					<?php foreach( $content['field_emotional_gallery']['#items'] as $image ): ?>
						<?php if($image['filemime'] == 'image/jpeg' || $image['filemime'] == 'image/png' || $image['filemime'] == 'image/gif'): ?>
						<li><div style="background-image:url('<?php echo file_create_url($image['uri']); ?>')" class="bg-img"></div></li>
						<?php elseif($image['filemime'] == 'text/plain'): ?>
						<?php
							$filename = file_create_url($image['uri']);
							$handle = fopen($filename, "r");
							$contents = fgets($handle);
							fclose($handle);
							if(preg_match("#(?<=v=|v\/|vi=|vi\/|youtu.be\/)[a-zA-Z0-9_-]{11}#", $contents, $matches)) {
								$videoLink = 'https://www.youtube.com/embed/' . $matches[0];
							}
							elseif(preg_match('#vimeo\.com\/([0-9]{1,10})#', $contents, $m)) {
								$videoLink = 'https://player.vimeo.com/video/' . $m[1];
							} else {
								$videoLink = $contents;
							}
							?>
						<li><iframe src="<?php echo $videoLink; ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></li>
						<?php endif; ?>
					<?php endforeach; ?>
				</ul>
				<div class="pager-images"></div>
				<div class="cursor prev-image"></div>
				<div class="cursor next-image"></div>
			</div>

		</div>
		<?php endif; ?>

		<div class="experience btn-gray">

			<div class="visible-xs chart-data-slider">
				<ul class="chart-slider">
					<li>
						<div class="chart-single-slider" data-percent="<?php echo $content['field_percent_school']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
							<div class="chart-content-slider">
								<div class="percent"></div>
								<div class="chart-title"><?php print t('Publishing'); ?></div>
							</div>
						</div>
					</li>
					<li>
						<div class="chart-single-slider" data-percent="<?php echo $content['field_percent_events']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
							<div class="chart-content-slider">
								<div class="percent"></div>
								<div class="chart-title"><?php print t('Events'); ?></div>
							</div>
						</div>
					</li>
					<li>
						<div class="chart-single-slider" data-percent="<?php echo $content['field_percent_web']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
							<div class="chart-content-slider">
								<div class="percent"></div>
								<div class="chart-title"><?php print t('Digital'); ?></div>
							</div>
						</div>
					</li>
				</ul>
				<div class="pager-chart"></div>
			</div>

<!-- 			<div class="hidden-xs col-sm-12 col-lg-6 chart-data">
				<div class="chart" data-percent="<?php echo $content['field_percent_school']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
					<div class="chart-content">
						<div class="percent"></div>
						<div class="chart-title"><?php print t('Publishing'); ?></div>
					</div>
				</div>
				<div class="chart" data-percent="<?php echo $content['field_percent_events']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
					<div class="chart-content">
						<div class="percent"></div>
						<div class="chart-title"><?php print t('Events'); ?></div>
					</div>
				</div>
				<div class="chart" data-percent="<?php echo $content['field_percent_web']['#items'][0]['value']; ?>" data-bar-color="#15a546" data-animate="2000">
					<div class="chart-content">
						<div class="percent"></div>
						<div class="chart-title"><?php print t('Digital'); ?></div>
					</div>
				</div>

			</div> -->
			<div class="col-sm-12 col-lg-10 experience-text">

				<h4><?php print t('Experience'); ?></h4>
				<p><?php echo $content['field_experience']['#items'][0]['value']; ?></p>

			</div>

		</div>

		<?php
			if( isset($content['field_colore_frecce_product']['#items']) ) {
				switch($content['field_colore_frecce_product']['#items'][0]['value'] ) {
					case 'chiaro':
						$pallini = "btn-white";
						break;
					case 'verde':
						$pallini = "btn-green";
						break;
					default:
						$pallini = "btn-gray";
				}
			} else {
				$pallini = "btn-gray";
			}
		?>
		<div class="slider clearfix <?php echo $pallini; ?>">

			<div class="col-sm-12 col-md-8 col-lg-9">

				<?php if(isset($content['field_product_gallery']) && is_array($content['field_product_gallery']['#items'])): ?>
				<div class="wrapper">
					<ul class="images-case">
						<?php foreach( $content['field_product_gallery']['#items'] as $image ): ?>
							<?php if($image['filemime'] == 'image/jpeg' || $image['filemime'] == 'image/png' || $image['filemime'] == 'image/gif'): ?>
							<li style="background-image:url('<?php echo file_create_url($image['uri']); ?>');" class="bg-img"></li>
							<?php /*elseif($image['filemime'] == 'text/plain'): ?>
							<?php
								$filename = file_create_url($image['uri']);
								$handle = fopen($filename, "r");
								$contents = fgets($handle);
								fclose($handle);
								if(preg_match("#(?<=v=|v\/|vi=|vi\/|youtu.be\/)[a-zA-Z0-9_-]{11}#", $contents, $matches)) {
									$videoLink = 'https://www.youtube.com/embed/' . $matches[0];
								}
								elseif(preg_match('#vimeo\.com\/([0-9]{1,10})#', $contents, $m)) {
									$videoLink = 'https://player.vimeo.com/video/' . $m[1];
								} else {
									$videoLink = $contents;
								}
								?>
								<li><iframe src="<?php echo $videoLink; ?>" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></li>*/?>
							<?php endif; ?>
						<?php endforeach; ?>
					</ul>
					<div class="pager"></div>
					<div class="cursor prev-image"></div>
					<div class="cursor next-image"></div>
				</div>
				<?php endif; ?>
			</div>

			<div class="col-sm-12 col-md-4 col-lg-3 slider-pan">
				<div class="panel-info-case">
					<div class="panel">

						<div class="content-text">

							<?php if( isset($content['field_numeri']['#items']) && is_array($content['field_numeri']['#items']) ): ?>
							<div class="numbers">
									<?php $i = 0; foreach($content['field_numeri']['#items'] as $numero): ?>
									<?php $fcid = $numero['value']; ?>
									<?php $fc = field_collection_item_load($fcid); ?>
									<?php if( isset ( $fc->field_numero['und'] ) && isset ( $fc->field_titolo_blocco['und'] ) ): ?>
									<p class="number" id="data-number-<?php echo $i++; ?>" data-number="<?php echo $fc->field_numero['und'][0]['value']; ?>">0</p>
									<p class="what"><?php echo $fc->field_titolo_blocco['und'][0]['value']; ?></p>
									<?php endif; ?>
									<?php endforeach; ?>
							</div>
							<?php endif; ?>

							<?php if( isset($content['field_product_gallery']['#items']) && is_array($content['field_product_gallery']['#items']) ): ?>
							<div class="all-desc">
								<?php $i = 0; foreach( $content['field_product_gallery']['#items'] as $image ): ?>
								<div id="desc_<?php echo $i++; ?>" class="desc animated<?php if($i>1):?> hide<?php endif; ?>">
									<?php if( isset( $image['field_titolo_image']['und'] ) ): ?>
									<h4><?php echo $image['field_titolo_image']['und'][0]['value']; ?></h4>
									<?php endif; ?>
									<?php if( isset( $image['field_description_image']['und'] ) ): ?>
									<p class="description"><?php echo $image['field_description_image']['und'][0]['value']; ?></p>
									<?php endif; ?>
								</div>
								<?php endforeach; ?>
							</div>
							<?php endif; ?>
						</div>

					</div>
				</div>
			</div>

		</div>

	</li>

</ol>
