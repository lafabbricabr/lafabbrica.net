<div class="overlay-menu hide"></div>
<div id="menu">

	<?php if( isset( $backToWorks ) ): ?>
		<div class="icon-grid">
			<a href="<?php echo url('works'); ?>"></a>
		</div>
	<?php endif; ?>

	<div class="icon"></div>
	<div class="btn-top">
		<div class="arrow"></div>
	</div>

	<?php if( isset( $fabText ) ): ?>
		<div class="fab-text-wrap">
			<div class="fab-text"><?php echo $fabText; ?></div>
			<!-- <div class="fab-filter">All</div> -->
		</div>
	<?php endif; ?>

	<div class="panel panel-menu">
		<div class="panel-menu-intern">
			<a href="javascript:;" class="icon-close"></a>

			<?php
				print theme('links__system_main_menu', array(
					'links' => $main_menu,
				));
			?>

			<div class="credits">
				<?php if( isset( $sediList ) && is_array( $sediList ) ): ?>
				<span><?php echo $sediList[0]->field_telefono['und'][0]['value']; ?></span>
				<a href="mailto:<?php echo $sediList[0]->field_email['und'][0]['email']; ?>"><?php echo $sediList[0]->field_email['und'][0]['email']; ?></a>
				<?php endif; ?>
				<?php if( isset($noteLegaliId) ): ?>
				<?php $noteLegali = node_load($noteLegaliId); ?>
				<a href="#" class="legals"><?php echo $noteLegali->title; ?></a>
				<?php endif; ?>
				<?php if( isset($cookiesId) ): ?>
					<?php $cookies = node_load($cookiesId); ?>
					<a href="#" class="cookie"><?php echo $cookies->title; ?></a>
				<?php endif; ?>
			</div>

			<ul class="lang">
				<ul class="submenu">

					<?php
					global $language;
					foreach( language_list() as $key => $lingua):
					if( $key == $language->language || $lingua->enabled == 0 ) continue;
					// find path

					$redirect = translatePath(current_path(),$lingua);
					?>
					<li><a href="<?php echo $redirect; ?>" title="<?php echo $lingua->native; ?>"><?php echo $lingua->native; ?></a></li>
					<?php endforeach; ?>

				</ul>
				<li class="active"><span></span><?php echo $language->native; ?></li>
			</ul>
		</div>

		<div class="panel-menu-page">
			<?php if( isset($promessa) ): ?>
				<div class="content-page-promise hide">
					<a href="javascript:;" class="close-page"></a>
					<?php if( isset($promessa->field_lasfida_titolo['und']) ): ?>
						<h3><?php echo $promessa->field_lasfida_titolo['und'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($promessa->field_lasfida_testo['und']) ): ?>
						<p><?php echo $promessa->field_lasfida_testo['und'][0]['value']; ?></p>
						<div class="quotation-marks"></div>
					<?php endif; ?>

					<?php if( isset($promessa->field_social_titolo['und']) ): ?>
						<h3><?php echo $promessa->field_social_titolo['und'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($promessa->field_social_testo['und']) ): ?>
						<p><?php echo $promessa->field_social_testo['und'][0]['value']; ?></p>
						<div class="double-dot"></div>
					<?php endif; ?>

					<?php if( isset($promessa->field_ispirare_titolo['und']) ): ?>
						<h3><?php echo $promessa->field_ispirare_titolo['und'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($promessa->field_ispirare_testo['und']) ): ?>
						<p><?php echo $promessa->field_ispirare_testo['und'][0]['value']; ?><br />
						</p>
						<div class="exclamation-mark"></div>
					<?php endif; ?>

					<?php if( isset($promessa->field_engagement_titolo['und']) ): ?>
						<h3><?php echo $promessa->field_engagement_titolo['und'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($promessa->field_engagement_testo['und']) ): ?>
						<p><?php echo $promessa->field_engagement_testo['und'][0]['value']; ?><br />
						</p>
						<div class="star"></div>
					<?php endif; ?>

					<?php if( isset($promessa->field_ilgruppo_titolo['und']) ): ?>
						<h3><?php echo $promessa->field_ilgruppo_titolo['und'][0]['value']; ?></h3>
					<?php endif; ?>
					<?php if( isset($promessa->field_ilgruppo_testo['und']) ): ?>
						<p><?php echo $promessa->field_ilgruppo_testo['und'][0]['value']; ?></p>
					<?php endif; ?>

				</div>
			<?php endif; ?>

			<?php if( isset($contatti) ): ?>
				<div class="content-page-contact hide">
					<a href="javascript:;" class="close-page"></a>
					<h3><?php echo $contatti->title; ?></h3>
					<p><?php echo $contatti->field_descrizione['und'][0]['value']; ?></p>

					<?php if(isset($contatti->field_linkedin['und'])): ?>
					<p><a href="<?php echo $contatti->field_linkedin['und'][0]['url']; ?>" target="_blank"><?php echo t('Follow us on'); ?> linkedin.com</a></p>
					<?php endif; ?>

					<?php if( isset( $sediList ) && is_array( $sediList )): ?>
						<?php foreach($sediList as $sede): ?>
							<div class="locations">
								<?php echo strtoupper($sede->name); ?><br />
								<?php echo $sede->field_indirizzo['und'][0]['value'] . "<br>"; ?>
								<?php if( isset($sede->field_indirizzo_2['und']) ):
									echo  $sede->field_indirizzo_2['und'][0]['value'] . "<br>";
								endif; ?>
								<?php echo $sede->field_telefono['und'][0]['value']; ?><br />
								<a href="mailto:<?php echo $sede->field_email['und'][0]['email']; ?>"><?php echo $sede->field_email['und'][0]['email']; ?></a>
							</div>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<?php if( isset($noteLegaliId) ): ?>
				<div class="content-page-legals hide">
					<a href="javascript:;" class="close-page"></a>

					<?php
						print $noteLegali->body['und'][0]['value'];
					?>

				</div>
			<?php endif; ?>
		</div>

		<?php if( isset($cookiesId) ): ?>
		<div class="content-page-cookie hide">
			<a href="javascript:;" class="close-page"></a>

			<?php
			print $cookies->body['und'][0]['value'];
			?>

		</div>
		<?php endif; ?>

		<?php if( isset($showSiiNostroPartner) ):?>

			<a href="javascript:;" class="close-page"></a>

			<div class="content-page-partner hide">
				<div class="scrolling stickyContainer">
					<h3><?php echo t('Risorse Umane') ?></h3>
					<p>
						Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
					</p>
				</div>
				<div class="scrolling stickyContainer">
					<h3><?php echo t('Fornitore') ?></h3>
					<p>
						Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.

 fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.
					</p>
				</div>

			</div>
		<?php endif; ?>
	</div>
</div>
