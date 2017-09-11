<div id="loader" class="animated">
	<div class="wrap-loader hide">
		<div class="logo-loaded animated"></div>
	</div>
</div>

<?php include('include/menu.php'); ?>

<?php print $messages; ?>

<div class="wrapper-net">
	<section class="main-list">

		<div class="section-logo content relative top">
			<a href="<?php print url('<front>'); ?>" class="logo"></a>
		</div>

		<div class="scrolling stickyContainer">

			<?php if( isset($sediList) && is_array($sediList) ): ?>
			<h4 class="title-list stickyHeader"><?php echo t('Offices'); ?></h4>
			<ul class="list office">
				<?php foreach($sediList as $sede): ?>
				<li class="" data-map="office.<?php echo strtolower($sede->field_nazione['und'][0]['value']); ?>">
					<div class="text">

						<div class="text-info">
							<h2><?php echo $sede->name; ?></h2>
							<p class="country"><?php echo $sede->field_nazione['und'][0]['value']; ?></p>
						</div>
						<div class="info">
							<p class="address">
								<?php echo $sede->field_indirizzo['und'][0]['value']; ?>
								<?php if( isset($sede->field_indirizzo_2['und']) ):
								echo "<br>" . $sede->field_indirizzo_2['und'][0]['value'];
								endif; ?>
							</p>
							<p class="tel"><?php echo $sede->field_telefono['und'][0]['value']; ?></p>
							<a href="mailto:<?php echo $sede->field_email['und'][0]['email']; ?>" class="mail"><?php echo $sede->field_email['und'][0]['email']; ?></a>
						</div>

					</div>
				</li>
				<?php endforeach; ?>

			</ul>
			<?php endif; ?>

			<?php if( isset($networkList) && is_array($networkList) ): ?>
			<h4 class="title-list stickyHeader"><?php echo t('Network'); ?></h4>
			<ul class="list network">
				<?php foreach($networkList as $network): ?>
				<li data-map="network.<?php echo strtolower( str_replace( ' ' , '_' , $network->name) ); ?>">
					<div class="text">

						<div class="text-info">
							<h2><?php echo $network->name; ?></h2>
						</div>
						<div class="info">
							<?php if( isset( $network->field_persona_di_riferimento['und'] )): ?>
							<p class="name"><?php echo $network->field_persona_di_riferimento['und'][0]['value']; ?></p>
							<?php endif; ?>
							<?php if( isset( $network->field_email['und'] )): ?>
							<a href="mailto:<?php echo $network->field_email['und'][0]['email']; ?>" class="mail"><?php echo $network->field_email['und'][0]['email']; ?></a>
							<?php endif; ?>
						</div>

					</div>
				</li>
				<?php endforeach; ?>

			</ul>
			<?php endif; ?>
		</div>

	</section>


	<section class="main-map hidden-xs hidden-sm">
		<div id="map-canvas"></div>
	</section>

</div>