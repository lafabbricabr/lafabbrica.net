<?php
/**
 * Implements hook_html_head_alter().
 * We are overwriting the default meta character type tag with HTML5 version.
 */
function laf_html_head_alter(&$head_elements)
{
    $head_elements['system_meta_content_type']['#attributes'] = array(
        'charset' => 'utf-8'
    );
}

/**
 * Main menu theme template.
 */
function laf_links__system_main_menu($variables)
{
    $html = "<ul class=\"link-page\">\n";
    foreach ($variables['links'] as $link)
    {
        $html .= "<li>" . l($link['title'], $link['href'], $link) . "</li>";
    }
    $html .= "  </ul>\n";
    return $html;
}

/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return a string containing the breadcrumb output.
 */
function laf_breadcrumb($variables)
{
    $breadcrumb = $variables['breadcrumb'];

    if (!empty($breadcrumb))
    {
        // Provide a navigational heading to give context for breadcrumb links to
        // screen-reader users. Make the heading invisible with .element-invisible.
        $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
        // Uncomment to add current page to breadcrumb
        // $breadcrumb[] = drupal_get_title();
        return '<nav class="breadcrumb">' . $heading . implode(' » ', $breadcrumb) . '</nav>';
    }
}

/**
 * Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function laf_menu_local_tasks(&$variables)
{
    $output = '';

    if (!empty($variables['primary']))
    {
        $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
        $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
        $variables['primary']['#suffix'] = '</ul>';
        $output .= drupal_render($variables['primary']);
    }
    if (!empty($variables['secondary']))
    {
        $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
        $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
        $variables['secondary']['#suffix'] = '</ul>';
        $output .= drupal_render($variables['secondary']);
    }
    return $output;
}

/**
 * Override or insert variables into the html template.
 */
function laf_preprocess_html(&$variables)
{
    global $language;
    $pagePath = explode('/', drupal_lookup_path('alias', current_path()));

    //default
    $variables['bodyClass'] = 'works';
    /* Cerca le sedi */
    $sediVid = 3;
    $sedi = i18n_taxonomy_get_tree($sediVid, $language->language, 0, null, true);
    $variables['sediList'] = $sedi;

    // echo '<br><br><br><br><h1>testeee</h1>';
    // echo $sediVid;
    // echo '<br>';
    // echo $language->language;
    // echo '<br><!-- ';
    // echo json_encode($language);
    // echo ' --><br>';
    /* Cerca i network */
    $networkVid = 4;
    $network = i18n_taxonomy_get_tree($networkVid, $language->language, 0, null, true);
    $variables['networkList'] = $network;

    // HOMEPAGE
    if (drupal_is_front_page())
    {
        $variables['bodyClass'] = 'home';
    }

    // WORKS
    if (arg(0) == 'works')
    {
        $variables['bodyClass'] = 'works';
    }

    // if(arg(0) == 'partners' || $pagePath[0] == 'partners') {
    //     echo "<br /><br /><br /><br /><br /><br /><br /><h1>PARTNERS</h1>";
    // } else{
    //     echo "<br /><br /><br /><br /><br /><br /><br /><h1>SEM PARTNERS</h1>";
    //     echo "<br />" . arg(0);
    //     echo "<br />" . $pagePath[0];
    // }
    // CASE
    if ($pagePath[0] == 'works' && arg(0) == 'node')
    {
        $variables['bodyClass'] = 'case';
    }

    // ENGINE
    if ($pagePath[0] == 'engine')
    {
        $variables['bodyClass'] = 'engine';
    }

    // GLOBAL BUSINESS
    if (arg(0) == 'network')
    {
        $variables['bodyClass'] = 'network';
    }

    // PROMESSA
    if (arg(0) == 'promessa')
    {
        $variables['bodyClass'] = 'promessa';
    }

    // CONTACT
    if (arg(0) == 'contact')
    {
        $variables['bodyClass'] = 'contact';
    }

    if ($pagePath[0] == 'partners')
    {
        $variables['bodyClass'] = 'partners';
    }

    /*dpm(arg());
     dpm($pagePath);*/

}

/**
 * Override or insert variables into the page template.
 */
function laf_preprocess_page(&$variables)
{
    global $language;

    $pagePath = explode('/', drupal_lookup_path('alias', current_path()));

    /* Cerca pagina Note Legali */
    $result = db_query("
          SELECT n.nid FROM {node} n
          WHERE n.status = :status
          AND n.type = :type
          AND n.language = :language", array(
        ":status" => '1',
        ":type" => "terms_of_use",
        ":language" => $language->language
    ));

    $noteLegaliId = $result->fetchField();
    $variables['noteLegaliId'] = $noteLegaliId ? $noteLegaliId : 15;

    $result = db_query("
        SELECT n.nid FROM {node} n
        WHERE n.status = :status
        AND n.type = :type
        AND n.language = :language", array(
        ":status" => '1',
        ":type" => "cookies_text",
        ":language" => $language->language
    ));

    $cookiesId = $result->fetchField();
    $variables['cookiesId'] = $cookiesId ? $cookiesId : 44;

    /* Cerca promessa */
    $result = db_query("
            SELECT n.nid FROM {node} n
            WHERE n.status = :status
            AND n.type = :type
            AND n.language = :language", array(
        ":status" => '1',
        ":type" => "promessa",
        ":language" => $language->language
    ));
    $promessa_id = $result->fetchAll();
    foreach ($promessa_id as $node)
    {
        $promessaPage = node_load($node->nid);
    }
    if (isset($promessaPage)):
        $variables['promessa'] = $promessaPage;
    endif;

    /* Cerca contatti */
    $result = db_query("
    SELECT n.nid FROM {node} n
    WHERE n.status = :status
    AND n.type = :type
    AND n.language = :language", array(
        ":status" => '1',
        ":type" => "contatti",
        ":language" => $language->language
    ));
    $contatti_id = $result->fetchAll();
    foreach ($contatti_id as $node)
    {
        $contattiPage = node_load($node->nid);
    }
    if (isset($contattiPage)):
        $variables['contatti'] = $contattiPage;
    endif;

    // Si nostro partner texts (Fornitore and Risorse Umane )
    // Fornitore
    $result = db_query("
    SELECT n.nid FROM {node} n
    WHERE n.status = :status
    AND n.type = :type
    AND n.language = :language", array(
        ":status" => '1',
        ":type" => "fornitore_text",
        ":language" => $language->language
    ));

    $fornitore_id = $result->fetchAll();
    foreach ($fornitore_id as $node)
    {
        $fornitorePage = node_load($node->nid);
    }
    if (isset($fornitorePage)):
        $variables['fornitore_page'] = $fornitorePage;
    endif;

    // Risorse Umane
    $result = db_query("
    SELECT n.nid FROM {node} n
    WHERE n.status = :status
    AND n.type = :type
    AND n.language = :language", array(
        ":status" => '1',
        ":type" => "risorse_umane_text",
        ":language" => $language->language
    ));

    $risorse_id = $result->fetchAll();
    foreach ($risorse_id as $node)
    {
        $risorsePage = node_load($node->nid);
    }
    if (isset($risorsePage)):
        $variables['risorse_page'] = $risorsePage;
    endif;

    // only show if the two pages exists because the template (menu--partners.php)
    // need the two parts
    $showSiiNostroPartner = isset($fornitorePage) && isset($risorsePage);
    $variables['showSiiNostroPartner'] = $showSiiNostroPartner;

    if ($showSiiNostroPartner)
    {
        $nostro_partners__risorse_umane = [];
        $nostro_partners__fornitore = [];

        $result = db_query("
            SELECT n.nid FROM {node} n
            WHERE n.status = :status
            AND n.type = :type
            AND n.language = :language",
            array(
                ":status" => '1',
                ":type" => "sii_nostro_partner",
                ":language" => $language->language
            )
        );
        $partners = node_load_multiple($result->fetchCol());

        foreach ($partners as $partner) {
            if ($partner->field_tipo_partner['it'][0]['value'] == 1) {
                array_push($nostro_partners__risorse_umane, $partner);
            } else {
                array_push($nostro_partners__fornitore, $partner);
            }
        }
        // echo '<-- AQUI RH';
        // echo json_encode($nostro_partners__risorse_umane);
        // echo '-->';
        //
        // echo '<-- AQUI fornitore';
        // echo json_encode($nostro_partners__fornitore);
        // echo '-->';

        $variables['nostro_partners__risorse_umane'] = $nostro_partners__risorse_umane;
        $variables['nostro_partners__fornitore'] = $nostro_partners__fornitore;



    }

    /* Cerca le sedi */
    $sediVid = 3;
    $sedi = i18n_taxonomy_get_tree($sediVid, $language->language, 0, null, true);
    // echo json_encode(i18n_taxonomy_get_tree($sediVid,$language->language,0,null,true));
    // echo json_encode($sedi);
    $variables['sediList'] = $sedi;

    // HOMEPAGE
    if (drupal_is_front_page())
    {
        $variables['fabText'] = t('Home');

        /* Cerca testi */
        // echo "<p>AQUIIII 1</p>";
        $result = db_query("
      SELECT n.nid FROM {node} n
      WHERE n.status = :status
      AND n.type = :type
      AND n.language = :language", array(
            ":status" => '1',
            ":type" => "home_page",
            ":language" => $language->language
        ));
        $homepage_id = $result->fetchAll();
        // echo "<p>AQUIIII 2</p>";
        // echo $language->language;
        // echo "<p>";
        // echo json_encode($homepage_id);
        // echo "</p>";
        foreach ($homepage_id as $node)
        {
            // echo '<p> --- ';
            $homePage = node_load($node->nid);
            // echo $node->nid;
            // echo '<p>';

        }
        if (isset($homePage)):
            $variables['homePage'] = $homePage;
        endif;

        /* Cerca i works */
        $result = db_query("
    SELECT n.nid FROM {node} n
    WHERE n.status = :status
    AND n.type = :type
    AND n.language = :language
    ORDER BY n.promote DESC, RAND()
    LIMIT 0,3", array(
            ":status" => '1',
            ":type" => "case_history",
            ":language" => $language->language
        ));
        $worksId = $result->fetchCol();
        //$works    = array_reverse( node_load_multiple( $worksId ), true);
        $works = node_load_multiple($worksId);
        $variables['worksList'] = $works;

        /* Cerca Engine */
        $result = db_query("
    SELECT n.nid FROM {node} n
    WHERE n.status = :status
    AND n.language = :language
    AND n.type = :type", array(
            ":status" => '1',
            ":type" => "engine",
            ":language" => $language->language
        ));
        $engine_id = $result->fetchAll();
        foreach ($engine_id as $node)
        {
            $enginePage = node_load($node->nid);
        }
        if (isset($enginePage)):
            $variables['enginePage'] = $enginePage;
        endif;
    }

    // WORKS
    if (arg(0) == 'works')
    {

        $variables['fabText'] = t('Works');

        /* Cerca i works */
        $result = db_query("
      SELECT n.nid FROM {node} n
      WHERE n.status = :status
      AND n.type = :type
      AND n.language = :language
      ORDER BY n.sticky DESC, n.created DESC", array(
            ":status" => '1',
            ":type" => "case_history",
            ":language" => $language->language
        ));
        $worksId = $result->fetchCol();
        //$works    = array_reverse( node_load_multiple( $worksId ), true);
        $works = node_load_multiple($worksId);
        $variables['worksList'] = $works;

        /* Cerca i clienti */
        $clientiVid = 2;
        $clienti = i18n_taxonomy_get_tree($clientiVid, 'und', 0, null, true);
        $variables['clientiList'] = $clienti;

        /* Cerca le sedi */
        $sediVid = 3;
        $sedi = i18n_taxonomy_get_tree($sediVid, $language->language, 0, null, true);
        $variables['sediList'] = $sedi;
    }

    // CASE
    if ($pagePath[0] == 'works' && arg(0) == 'node')
    {
        $variables['fabText'] = t('Case Study');
        $variables['backToWorks'] = true;
    }

    // ENGINE
    if ($pagePath[0] == 'engine')
    {
        $variables['fabText'] = t('Engine');
        $variables['isEngine'] = true;
    }

    // GLOBAL BUSINESS
    if (arg(0) == 'network')
    {
        $variables['fabText'] = t('Network');

        /* Cerca i network */
        $networkVid = 4;
        $network = i18n_taxonomy_get_tree($networkVid, $language->language, 0, null, true);
        $variables['networkList'] = $network;
    }

    /*dpm(arg());
     dpm($pagePath);*/
}

/**
 * Override or insert variables into the node template.
 */
function laf_preprocess_node(&$variables)
{
    $variables['submitted'] = t('Published by !username on !datetime', array(
        '!username' => $variables['name'],
        '!datetime' => $variables['date']
    ));
    if ($variables['view_mode'] == 'full' && node_is_page($variables['node']))
    {
        $variables['classes_array'][] = 'node-full';
    }
}

/**
 * Preprocess variables for region.tpl.php
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("region" in this case.)
 */
function laf_preprocess_region(&$variables, $hook)
{
    // Use a bare template for the content region.
    if ($variables['region'] == 'content')
    {
        $variables['theme_hook_suggestions'][] = 'region__bare';
    }
}

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
function laf_preprocess_block(&$variables, $hook)
{
    // Use a bare template for the page's main content.
    if ($variables['block_html_id'] == 'block-system-main')
    {
        $variables['theme_hook_suggestions'][] = 'block__bare';
    }
    $variables['title_attributes_array']['class'][] = 'block-title';
}

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
function laf_process_block(&$variables, $hook)
{
    // Drupal 7 should use a $title variable instead of $block->subject.
    $variables['title'] = $variables['block']->subject;
}

/**
 * Changes the search form to use the "search" input element of HTML5.
 */
function laf_preprocess_search_block_form(&$vars)
{
    $vars['search_form'] = str_replace('type="text"', 'type="search"', $vars['search_form']);
}

/**
 * Remove css system files from frontend
 */
function laf_css_alter(&$css)
{
    if (!user_is_logged_in() && arg(0) !== 'user')
    {
        // Remove Drupal core css
        $exclude = array(
            'modules/aggregator/aggregator.css' => false,
            'modules/block/block.css' => false,
            'modules/book/book.css' => false,
            'modules/comment/comment.css' => false,
            'modules/dblog/dblog.css' => false,
            'modules/field/theme/field.css' => false,
            'modules/file/file.css' => false,
            'modules/filter/filter.css' => false,
            'modules/forum/forum.css' => false,
            'modules/help/help.css' => false,
            'modules/menu/menu.css' => false,
            'modules/node/node.css' => false,
            'modules/openid/openid.css' => false,
            'modules/poll/poll.css' => false,
            'modules/profile/profile.css' => false,
            'modules/search/search.css' => false,
            'modules/statistics/statistics.css' => false,
            'modules/syslog/syslog.css' => false,
            'modules/system/admin.css' => false,
            'modules/system/maintenance.css' => false,
            'modules/system/system.css' => false,
            'modules/system/system.admin.css' => false,
            'modules/system/system.base.css' => false,
            'modules/system/system.maintenance.css' => false,
            'modules/system/system.messages.css' => false,
            'modules/system/system.menus.css' => false,
            'modules/system/system.theme.css' => false,
            'modules/taxonomy/taxonomy.css' => false,
            'modules/tracker/tracker.css' => false,
            'modules/update/update.css' => false,
            'modules/user/user.css' => false,
            'misc/vertical-tabs.css' => false,

            // Remove contrib module CSS
            drupal_get_path('module', 'views') . '/css/views.css' => false,
            drupal_get_path('module', 'ckeditor') . '/css/ckeditor.css' => false,
            drupal_get_path('module', 'ctools') . '/css/ctools.css' => false,
        );
        $css = array_diff_key($css, $exclude);
    }
}

function getExcerpt($str, $startPos = 0, $maxLength = 100)
{
    if (strlen($str) > $maxLength)
    {
        $excerpt = substr($str, $startPos, $maxLength - 3);
        $lastSpace = strrpos($excerpt, ' ');
        $excerpt = substr($excerpt, 0, $lastSpace);
        $excerpt .= '...';
    }
    else
    {
        $excerpt = $str;
    }

    return $excerpt;
}

function findCaseFromCliente($cliente)
{
    global $language;
    $tid = $cliente->tid;

    $result = db_query("
      SELECT n.nid FROM {node} n
      INNER JOIN {field_data_field_cliente} t
      ON n.nid = t.entity_id
      WHERE n.status = :status
      AND n.type = :type
      AND n.language = :language
      AND t.field_cliente_tid = :tid
      ORDER BY created DESC", array(
        ":status" => '1',
        ":type" => "case_history",
        ":tid" => $tid,
        ":language" => $language->language
    ));
    $case_id = $result->fetchAll();
    foreach ($case_id as $node)
    {
        $cases[] = node_load($node->nid);
    }
    if (isset($cases)) return $cases;
    else return false;
}

function translatePath($path, $language)
{
    $translatedPath = translation_path_get_translations($path);

    if (is_array($translatedPath) && isset($translatedPath[$language
        ->language]))
    {
        $redirect = base_path() . $language->language . '/' . drupal_get_path_alias($translatedPath[$language
            ->language], $language->language);
    }
    elseif (drupal_valid_path($path))
    {
        $redirect = base_path() . $language->language . '/' . $path;
    }
    else
    {
        $redirect = base_path() . $language->language;
    }
    return $redirect;
}
