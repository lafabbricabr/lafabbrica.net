<div class="content-page-partners hide">

    <i class="strip__close ex-icon-close"></i>
    <i class="strip__close--all ex-icon-close"></i>
    <section class="strips">
        <article class="strips__strip">
            <div class="strip__content">
                <h1 class="strip__title" data-name="<?php echo $risorse_page->title; ?>"><?php echo $risorse_page->title; ?></h1>
                <p><?php echo $risorse_page->body['und'][0]['value']; ?></p>
                <?php if(!$nostro_partners__risorse_umane) {?>
                    <p>Nenhuma vaga em aberto no momento</p>
                <?php } else { ?>
                    <ul>
                        <?php foreach ($nostro_partners__risorse_umane as $risorse_umane) { ?>
                            <li data-href="#risorse_umane-<?php echo $risorse_umane->vid ?>" class="open-inner-text" >
                                <?php echo $risorse_umane->title ?>
                            </li>
                        <?php } ?>
                    </ul>
                    <?php foreach ($nostro_partners__risorse_umane as $risorse_umane) { ?>
                        <div class="strip__inner-text" id="risorse_umane-<?php echo $risorse_umane->vid ?>">
                            <h2><?php echo $risorse_umane->title ?></h2>
                            <?php echo $risorse_umane->body['und'][0]['value']; ?>
                        </div>
                    <?php } ?>
                <?php } ?>
                <hr />
                <h3>Banco de Currículos</h3>
                <p>Não encontrou oportunidades de trabalho? Envie seu curriculum para lorem@ipsum.com para oportunidades futuras</p>
            </div>
        </article>
        <article class="strips__strip">
            <div class="strip__content">
                <h1 class="strip__title" data-name="<?php echo $fornitore_page->title; ?>"><?php echo $fornitore_page->title; ?></h1>
                <p><?php echo $fornitore_page->body['und'][0]['value']; ?></p>
                <?php if(!$nostro_partners__fornitore) {?>
                    <p>Nenhum edital em aberto no momento</p>
                <?php } else { ?>
                    <ul>
                        <?php foreach ($nostro_partners__fornitore as $fornitore) { ?>
                            <li data-href="#fornitore_umane-<?php echo $fornitore_umane->vid ?>" class="open-inner-text" >
                                <?php echo $fornitore->title ?>
                            </li>
                        <?php } ?>
                    </ul>
                    <?php foreach ($nostro_partners__fornitore as $fornitore) { ?>
                        <div class="strip__inner-text" id="fornitore_umane-<?php echo $fornitore_umane->vid ?>">
                            <h2><?php echo $fornitore->title ?></h2>
                            <?php echo $fornitore->body['und'][0]['value']; ?>
                        </div>
                    <?php } ?>
                <?php } ?>
            </div>
        </article>
    </section>
</div>
