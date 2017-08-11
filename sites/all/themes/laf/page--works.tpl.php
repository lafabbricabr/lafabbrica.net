<div id="loader" class="animated">
	<div class="wrap-loader hide">
		<div class="logo-loaded animated"></div>
	</div>
</div>

<?php include('include/menu.php'); ?>

<section class="main">
	<?php
	/*dpm($worksList);
	dpm($clientiList);
	dpm($sediList);*/
	?>
	<?php print $messages; ?>

	<div class="container-fluid">

		<div class="content top">
			<a href="<?php print url('<front>'); ?>" class="logo"></a>
		</div>

		<div class="wrapper-grid-top">
			<div class="tabs">
				<a href="javascript:;" data-tab="clients" class="tab tab-clients"><?php echo t('clients'); ?></a>
				<a href="javascript:;" data-tab="case" class="tab tab-cases active"><?php echo t('case study'); ?></a>
			</div>
			<div class="label-filter">
				<div class="c-filter c-open c-show"></div>
				<div class="c-filter c-close"></div>
				<div class="c-filter tab-filter datafilter" data-title="All"></div>
			</div>


			<div class="panel-filter hide">
				<div class="wrap-panel">
					<h4 class="title"><?php echo t('order by'); ?></h4>
					<ul>
						<li><a href="javascript:;" class="datafilter" data-title="<?php echo t('Publishing'); ?>"><?php echo t('Publishing'); ?></a></li>
						<li><a href="javascript:;" class="datafilter" data-title="<?php echo t('Events'); ?>"><?php echo t('Events'); ?></a></li>
						<li><a href="javascript:;" class="datafilter" data-title="<?php echo t('Digital'); ?>"><?php echo t('Digital'); ?></a></li>
					</ul>
					<?php if( isset($sediList) && is_array($sediList) ): ?>
					<ul>
						<?php foreach($sediList as $sede): ?>
							<li><a href="javascript:;" class="datafilter" data-title="<?php echo $sede->field_nazione['und'][0]['value']; ?>"><?php echo $sede->field_nazione['und'][0]['value']; ?></a></li>
						<?php endforeach; ?>
					</ul>
					<?php endif; ?>
				</div>

			</div>

		</div>



		<div id="case" class="works-grid case">

			<?php if( isset( $worksList ) && is_array( $worksList) ): ?>
			<?php $i = count($worksList); ?>
			<?php foreach( $worksList as $work): ?>
					<?php $sede = taxonomy_term_load($work->field_sede['und'][0]['tid']); ?>
					<div class="item" data-sort="0" data-filter="all:<?php echo $i; ?>,<?php echo strtolower( t('Events') ); ?>:<?php echo $work->field_percent_events['und'][0]['value']; ?>,<?php echo strtolower( t('Publishing') ); ?>:<?php echo $work->field_percent_school['und'][0]['value']; ?>,<?php echo strtolower( t('Digital') ); ?>:<?php echo $work->field_percent_web['und'][0]['value']; ?>,<?php echo strtolower($sede->field_nazione['und'][0]['value']); ?>:100">

						<div class="image-background hover-out" style="background-image:url('<?php echo image_style_url('thumb_works',$work->field_emotional_gallery['und'][0]['uri']); ?>')"></div>
						<div class="hover-case hover-in">
							<a href="<?php echo drupal_get_path_alias('node/' . $work->nid);?>" class="text-case">
								<h2><?php echo $work->title; ?></h2>
								<?php if( isset( $work->field_testo_cover['und'] ) && is_array( $work->field_testo_cover['und'] ) ): ?>
								<p><?php echo $work->field_testo_cover['und'][0]['value']; ?></p>
								<?php elseif( isset( $work->field_experience['und'] ) && is_array( $work->field_experience['und'] ) ): ?>
								<p><?php echo getExcerpt($work->field_experience['und'][0]['value'],0,150); ?></p>
								<?php endif; ?>
								<span class="btn-link"><span class="arw"></span></span>
							</a>
						</div>

					</div>
				<?php $i--; ?>
			<?php endforeach; ?>
			<?php endif; ?>

		</div>



		<div id="clients" class="works-grid clients hide">
			<?php if( isset( $clientiList ) && is_array( $clientiList) ): ?>
				<?php $i = 0; ?>
				<?php foreach( $clientiList as $cliente): ?>
					<?php $cases = findCaseFromCliente($cliente); ?>
					<div class="item<?php if( !$cases ): ?> inactive<?php endif; ?>">

						<div class="image-background" style="background-image: url('<?php echo file_create_url($cliente->field_logo['und'][0]['uri']); ?>')"></div>
						<?php if( $cases ): ?>
						<div class="hover-case hover-in">
							<?php if( count($cases) > 1 ): ?>
							<ul id="slide_<?php echo $i++; ?>" class="bxslider-clients">

								<?php foreach($cases as $key=>$case): ?>
								<li>
									<a href="<?php echo drupal_get_path_alias('node/' . $case->nid);?>" class="text-case">
										<h2><?php echo $case->title; ?></h2>
										<?php if( isset( $case->field_testo_cover['und'] ) && is_array( $case->field_testo_cover['und'] ) ): ?>
										<p><?php echo getExcerpt($case->field_testo_cover['und'][0]['value'],0,150); ?></p>
										<?php elseif( isset( $case->field_experience['und'] ) && is_array( $case->field_experience['und'] ) ): ?>
										<p><?php echo getExcerpt($case->field_experience['und'][0]['value'],0,150); ?></p>
										<?php endif; ?>
									</a>
								</li>
								<?php endforeach; ?>
							</ul>

							<?php else: ?>
								<a href="<?php echo drupal_get_path_alias('node/' . $cases[0]->nid);?>" class="text-case">
									<h2><?php echo $cases[0]->title; ?></h2>
									<?php if( isset( $cases[0]->field_testo_cover['und'] ) && is_array( $cases[0]->field_testo_cover['und'] ) ): ?>
									<p><?php echo getExcerpt($cases[0]->field_testo_cover['und'][0]['value'],0,150); ?></p>
									<?php elseif( isset( $cases[0]->field_experience['und'] ) && is_array( $cases[0]->field_experience['und'] ) ): ?>
									<p><?php echo getExcerpt($cases[0]->field_experience['und'][0]['value'],0,150); ?></p>
									<?php endif; ?>
								</a>
							<?php endif; ?>
						</div>
						<?php endif; ?>

					</div>
				<?php endforeach; ?>
			<?php endif; ?>

		</div>

</section>

</section> <!-- /#main -->