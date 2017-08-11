<?php //dpm($content); ?>

<section class="main-engine">

	<div class="content relative top">
		<a href="<?php print url('<front>'); ?>" class="logo"></a>
	</div>

	<div class="scrolling">

		<ul class="list engine">
			<li class="description visible-xs visible-sm">
				<div class="text">
					<?php if( isset($content['field_titolo_blocco']['#items']) ): ?>
					<h3><?php echo $content['field_titolo_blocco']['#items'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($content['body']['#items']) ): ?>
					<p class="descr-main"><?php echo $content['body']['#items'][0]['value']; ?></p>
					<?php endif; ?>
				</div>
			</li>

			<li class="database">
				<a href="javascript:;" class="icon-close"></a>
				<div class="text">
					<?php if( isset($content['field_database_titolo']['#items']) ): ?>
						<h2><?php echo $content['field_database_titolo']['#items'][0]['value']; ?></h2>
					<?php endif; ?>
					<?php if( isset($content['field_database_sottotitolo']['#items']) ): ?>
						<p><?php echo $content['field_database_sottotitolo']['#items'][0]['value']; ?></p>
					<?php endif; ?>
					<div class="info">
						<?php if( isset($content['field_database_testo']['#items']) ): ?>
							<p><?php echo $content['field_database_testo']['#items'][0]['value']; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</li>

			<li class="movement">
				<a href="javascript:;" class="icon-close"></a>
				<div class="text">
					<?php if( isset($content['field_movement_titolo']['#items']) ): ?>
						<h2><?php echo $content['field_movement_titolo']['#items'][0]['value']; ?></h2>
					<?php endif; ?>
					<?php if( isset($content['field_movement_sottotitolo']['#items']) ): ?>
						<p><?php echo $content['field_movement_sottotitolo']['#items'][0]['value']; ?></p>
					<?php endif; ?>
					<div class="info">
						<?php if( isset($content['field_movement_testo']['#items']) ): ?>
							<p><?php echo $content['field_movement_testo']['#items'][0]['value']; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</li>

			<li class="energy">
				<a href="javascript:;" class="icon-close"></a>
				<div class="text">
					<?php if( isset($content['field_energy_titolo']['#items']) ): ?>
						<h2><?php echo $content['field_energy_titolo']['#items'][0]['value']; ?></h2>
					<?php endif; ?>
					<?php if( isset($content['field_energy_sottotitolo']['#items']) ): ?>
						<p><?php echo $content['field_energy_sottotitolo']['#items'][0]['value']; ?></p>
					<?php endif; ?>
					<div class="info">
						<?php if( isset($content['field_energy_testo']['#items']) ): ?>
							<p><?php echo $content['field_energy_testo']['#items'][0]['value']; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</li>

			<li class="fuel">
				<a href="javascript:;" class="icon-close"></a>
				<div class="text">
					<?php if( isset($content['field_fuel_titolo']['#items']) ): ?>
						<h2><?php echo $content['field_fuel_titolo']['#items'][0]['value']; ?></h2>
					<?php endif; ?>
					<?php if( isset($content['field_fuel_sottotitolo']['#items']) ): ?>
						<p><?php echo $content['field_fuel_sottotitolo']['#items'][0]['value']; ?></p>
					<?php endif; ?>
					<div class="info">
						<?php if( isset($content['field_fuel_testo']['#items']) ): ?>
							<p><?php echo $content['field_fuel_testo']['#items'][0]['value']; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</li>

			<li class="fab">
				<a href="javascript:;" class="icon-close"></a>
				<div class="text">
					<?php if( isset($content['field_fab_titolo']['#items']) ): ?>
						<h2><?php echo $content['field_fab_titolo']['#items'][0]['value']; ?></h2>
					<?php endif; ?>
					<?php if( isset($content['field_fab_sottotitolo']['#items']) ): ?>
						<p><?php echo $content['field_fab_sottotitolo']['#items'][0]['value']; ?></p>
					<?php endif; ?>
					<div class="info">
						<?php if( isset($content['field_fab_testo']['#items']) ): ?>
							<p><?php echo $content['field_fab_testo']['#items'][0]['value']; ?></p>
						<?php endif; ?>
					</div>
				</div>
			</li>


		</ul>

	</div>

</section>


<section class="main-svg hidden-xs hidden-sm">
	<div class="main-page">

		<?php //include('include/svg-engine.php'); ?>

		<div class="text">
			<?php if( isset($content['field_titolo_blocco']['#items']) ): ?>
				<h3><?php echo $content['field_titolo_blocco']['#items'][0]['value']; ?></h3>
			<?php endif; ?>
			<?php if( isset($content['body']['#items']) ): ?>
				<p class="descr-main"><?php echo $content['body']['#items'][0]['value']; ?></p>
			<?php endif; ?>
		</div>
	</div>
	<?php include('include/svg-engine-2.php'); ?>
</section>