<div id="loader" class="animated">
	<div class="wrap-loader hide">
		<div class="logo-loaded animated"></div>
	</div>
</div>

<?php include('include/menu.php'); ?>

<?php if( isset( $isEngine ) ): ?>
<div class="wrapper-engine">
	<?php print $messages; ?>
	<?php print render($page['content']); ?>
</div>
<?php else: ?>
<section class="main">
	<?php print $messages; ?>
  <?php print render($page['content']); ?>
</section> <!-- /#main -->
<?php endif; ?>