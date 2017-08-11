<?php
//dpm($worksList);
//dpm($sediList);
?>
<div id="loader" class="animated">
	<div class="wrap-loader hide">
		<div class="logo-loaded animated"></div>
	</div>
</div>

<?php include('include/menu.php'); ?>

<?php print $messages; ?>

<ol class="curtains">
	<li class="cover cover-home">

		<section class="home animated">
			<div class="half"></div>

			<div class="content top">
				<a href="<?php print url('<front>'); ?>" class="logo"></a>
			</div>

			<?php if( isset($homePage) ): ?>
			<div class="content bottom">
				<h1 id="description-site"><?php echo $homePage->field_fab_titolo['und'][0]['value']; ?></h1>
				<p><?php echo $homePage->field_descrizione['und'][0]['value']; ?></p>
			</div>
			<?php endif; ?>

		</section>

	</li>

	<?php if( isset( $worksList ) && is_array( $worksList) ): ?>
	<li class="case-study">
		<?php foreach( $worksList as $work): ?>
		<div class="single-case bg-img" style="background-image:url('<?php echo file_create_url($work->field_emotional_gallery['und'][0]['uri']); ?>');">
			<a href="<?php echo url(drupal_get_path_alias('node/' . $work->nid));?>" class="hover">
				<div class="text-case">
					<h2><?php echo $work->title; ?></h2>
					<?php if( isset( $work->field_testo_cover['und'] ) && is_array( $work->field_testo_cover['und'] ) ): ?>
					<p><?php echo $work->field_testo_cover['und'][0]['value']; ?></p>
					<?php elseif( isset( $work->field_experience['und'] ) && is_array( $work->field_experience['und'] ) ): ?>
					<p><?php echo getExcerpt($work->field_experience['und'][0]['value'],0,150); ?></p>
					<?php endif; ?>
					<span class="btn-link"><span class="arw"></span></span>
				</div>
			</a>
		</div>
		<?php endforeach; ?>
	</li>
	<?php endif; ?>

	<?php if( isset($enginePage) ): ?>
	<li class="engine-section">
		<div class="content top">
			<?php if( isset( $enginePage->field_titolo_enhanced['und'] ) ): ?>
			<h3><?php echo $enginePage->field_titolo_enhanced['und'][0]['value']; ?></h3>
			<?php endif; ?>
			<?php if( isset( $enginePage->field_descrizione['und'] ) ): ?>
			<p><?php echo $enginePage->field_descrizione['und'][0]['value']; ?></p>
			<?php endif; ?>
			<a href="<?php echo url('engine'); ?>" class="btn-link gray"><span class="arw"></span></a>
		</div>
	</li>
	<?php endif; ?>

	<li class="footer">

		<?php if( isset( $sediList ) && is_array( $sediList) ): ?>
		<div class="info">
			<div class="map">
				<div id="map-canvas"></div>
			</div>
			<div class="contact">
				<div class="content bottom">
					<h4><?php echo $sediList[0]->name; ?></h4>
					<p class="address"><?php echo $sediList[0]->field_indirizzo['und'][0]['value']; ?></p>
					<p class="tel">T <?php echo $sediList[0]->field_telefono['und'][0]['value']; ?></p>
					<p class="mail">E  <?php echo $sediList[0]->field_email['und'][0]['email']; ?></p>
					<?php
					$mapPath = 'https://www.google.it/maps/search/';
					$mapPath .= str_replace(' ', '+' , $sediList[0]->field_indirizzo['und'][0]['value']);
					$mapPath .= '+' . $sediList[0]->name;
					$mapPath .= '@' . $sediList[0]->field_geolocalizzazione['und'][0]['lat'];
					$mapPath .= ',' . $sediList[0]->field_geolocalizzazione['und'][0]['lng'];
					$mapPath .= 'z/';
					?>
					<p class="view-on-google hidden-xs">
						<!--a href="https://www.google.it/maps/place/Via+Bernardino+Lanino,+5,+20144+Milano/@45.4569412,9.1606858,17z/data=!3m1!4b1!4m2!3m1!1s0x4786c3e0e121fc35:0xc82d82600138a8c6" target="_blank">View on Google maps</a-->
						<a href="<?php echo $mapPath; ?>" target="_blank"><?php echo t('View on Google maps'); ?></a>
					</p>
				</div>
			</div>
		</div>
		<?php endif; ?>

		<?php if( isset( $sediList ) && is_array( $sediList) ): ?>
		<div class="instagram-grid hidden-xs hidden-sm">
			<?php foreach( $sediList as $sede): ?>
			<div class="col bg-img" style="background-image:url('<?php echo file_create_url($sede->field_instagram_cover['und'][0]['uri']); ?>');">
				<header>
					<!--span class="instagram-icon"></span-->
					<h4><a href="<?php echo url('network') . '#office.' . strtolower($sede->field_nazione['und'][0]['value']);?>">Fab, <?php echo $sede->name; ?></a></h4>
					<?php if( isset($sede->field__hashtag['und']) && is_array($sede->field__hashtag['und']) ): ?>
					<!--p class="hashtag"><?php echo $sede->field__hashtag['und'][0]['value']; ?></p-->
					<?php endif; ?>
				</header>
				<!--footer>
					<a href="https://instagram.com/" target="_blank">Instagram/LaFabbrica</a>
				</footer-->
			</div>
			<?php endforeach; ?>
		<?php endif; ?>

		</div>

	</li>
</ol>
