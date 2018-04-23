<div class="content-page-partners hide">
    <!-- <a href="javascript:;" class="close-page"></a> -->
    <i class="icon-close strip__close"></i>
    <section class="strips">
        <article class="strips__strip">
            <div class="strip__content">
                <h1 class="strip__title" data-name="<?php echo $risorse_page->title; ?>"><?php echo $risorse_page->title; ?></h1>
                <div class="strip__inner-text">
                    <h2><?php echo $risorse_page->title; ?></h2>
                    <p><?php echo $risorse_page->body['und'][0]['value']; ?></p>
                    <?php if(!$nostro_partners__risorse_umane) {?>
                        <p>Nenhuma vaga em aberto no momento</p>
                    <?php } else { ?>
                        <ul>
                            <?php foreach ($nostro_partners__risorse_umane as $risorse_umane) { ?>
                                <li ><?php echo $risorse_umane->title ?></li>
                            <?php } ?>
                        </ul>
                        <?php foreach ($nostro_partners__risorse_umane as $risorse_umane) { ?>
                            <div class="strip_inner_inner-text">
                                <?php echo $risorse_umane->body['und'][0]['value']; ?>
                            </div>
                        <?php } ?>
                    <?php } ?>
                    <hr />
                    <p>Não encontrou oportunidades de trabalho? Envie seu curriculum para lorem@ipsum.com para oportunidades futuras</p>
                </div>
            </div>
        </article>
        <article class="strips__strip">
            <div class="strip__content">
                <h1 class="strip__title" data-name="<?php echo $fornitore_page->title; ?>"><?php echo $fornitore_page->title; ?></h1>
                <div class="strip__inner-text">
                    <h2><?php echo $fornitore_page->title; ?></h2>
                    <p><?php echo $fornitore_page->body['und'][0]['value']; ?></p>
                    <?php if(!$nostro_partners__fornitore) {?>
                        <p>Nenhum edital em aberto no momento</p>
                    <?php } else { ?>
                        <ul>
                            <?php foreach ($nostro_partners__fornitore as $fornitore) { ?>
                                <li ><?php echo $fornitore->title ?></li>
                            <?php } ?>
                        </ul>
                        <?php foreach ($nostro_partners__fornitore as $fornitore) { ?>
                            <div class="strip_inner_inner-text">
                                <?php echo $fornitore->body['und'][0]['value']; ?>
                            </div>
                        <?php } ?>
                    <?php } ?>
                    <hr />
                    <p>Não encontrou oportunidades de trabalho? Envie seu curriculum para lorem@ipsum.com para oportunidades futuras</p>
                </div>
            </div>
        </article>
    </section>
</div>
