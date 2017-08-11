<?php
/**
 * Implements hook_html_head_alter().
 * We are overwriting the default meta character type tag with HTML5 version.
 */
function laf_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}


/**
 * Main menu theme template.
 */
function laf_links__system_main_menu($variables) {
	$html = "<ul class=\"link-page\">\n";
	foreach ($variables['links'] as $link) {
		$html .= "<li>" . l( $link['title'], $link['href'], $link ) . "</li>";
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
function laf_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];

  if (!empty($breadcrumb)) {
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
function laf_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
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
function laf_preprocess_html(&$variables) {
	global $language;
	$pagePath = explode('/' , drupal_lookup_path('alias',current_path()));

	//default
	$variables['bodyClass'] = 'works';
	/* Cerca le sedi */
	$sediVid = 3;
	$sedi = i18n_taxonomy_get_tree($sediVid,$language->language,0,null,true);
	$variables['sediList'] = $sedi;

	/* Cerca i network */
	$networkVid = 4;
	$network = i18n_taxonomy_get_tree($networkVid,$language->language,0,null,true);
	$variables['networkList'] = $network;

	// HOMEPAGE
	if( drupal_is_front_page()) {
		$variables['bodyClass'] = 'home';
	}

	// WORKS
	if(arg(0) == 'works') {
		$variables['bodyClass'] = 'works';
	}

	// CASE
	if( $pagePath[0] == 'works' && arg(0) == 'node' ) {
		$variables['bodyClass'] = 'case';
	}

	// ENGINE
	if($pagePath[0] == 'engine') {
		$variables['bodyClass'] = 'engine';
	}

	// GLOBAL BUSINESS
	if(arg(0) == 'network') {
		$variables['bodyClass'] = 'network';
	}

	// PROMESSA
	if(arg(0) == 'promessa') {
		$variables['bodyClass'] = 'promessa';
	}

	// CONTACT
	if(arg(0) == 'contact') {
		$variables['bodyClass'] = 'contact';
	}

	/*dpm(arg());
	dpm($pagePath);*/

}

/**
 * Override or insert variables into the page template.
 */
function laf_preprocess_page(&$variables) {
	global $language;

	$pagePath = explode('/' , drupal_lookup_path('alias',current_path()));

	/* Cerca pagina Note Legali */
	if( $language->language == 'it' ):
	$variables['noteLegaliId'] = 7;
	$variables['cookiesId'] = 43;
	elseif( $language->language == 'en' ):
		$variables['noteLegaliId'] = 15;
		$variables['cookiesId'] = 44;
	endif;

	/* Cerca promessa */
	$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language",
		array(
			":status" => '1',
			":type"   => "promessa",
			":language"   => $language->language
		)
	);
	$promessa_id = $result->fetchAll();
	foreach($promessa_id as $node) {
		$promessaPage = node_load( $node->nid );
	}
	if( isset( $promessaPage ) ):
	$variables['promessa'] = $promessaPage;
	endif;

	/* Cerca contatti */
	$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language",
		array(
			":status" => '1',
			":type"   => "contatti",
			":language"   => $language->language
		)
	);
	$contatti_id = $result->fetchAll();
	foreach($contatti_id as $node) {
		$contattiPage = node_load( $node->nid );
	}
	if( isset( $contattiPage ) ):
		$variables['contatti'] = $contattiPage;
	endif;

	/* Cerca le sedi */
	$sediVid = 3;
	$sedi = i18n_taxonomy_get_tree($sediVid,$language->language,0,null,true);
	$variables['sediList'] = $sedi;

	// HOMEPAGE
	if( drupal_is_front_page()) {
		$variables['fabText'] = 'Home';

		/* Cerca testi */
		$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language",
			array(
				":status" => '1',
				":type"   => "home_page",
				":language"   => $language->language
			)
		);
		$homepage_id = $result->fetchAll();
		foreach($homepage_id as $node) {
			$homePage = node_load( $node->nid );
		}
		if( isset( $homePage ) ):
			$variables['homePage'] = $homePage;
		endif;

		/* Cerca i works */
		$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language
		ORDER BY n.promote DESC, RAND()
		LIMIT 0,3",
			array(
				":status" => '1',
				":type"   => "case_history",
				":language"   => $language->language
			)
		);
		$worksId = $result->fetchCol();
		//$works    = array_reverse( node_load_multiple( $worksId ), true);
		$works    = node_load_multiple( $worksId );
		$variables['worksList'] = $works;

		/* Cerca Engine */
		$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.language = :language
		AND n.type = :type",
			array(
				":status" => '1',
				":type"   => "engine",
				":language"   => $language->language
			)
		);
		$engine_id = $result->fetchAll();
		foreach($engine_id as $node) {
			$enginePage = node_load( $node->nid );
		}
		if( isset( $enginePage ) ):
		$variables['enginePage'] = $enginePage;
		endif;
	}

	// WORKS
	if(arg(0) == 'works') {
		switch($language->language) {
			case 'it':
				$variables['fabText'] = 'Progetti';
				break;
			case 'en':
				$variables['fabText'] = 'Works';
				break;
			default:
				$variables['fabText'] = 'Works';
		}


		/* Cerca i works */
		$result  = db_query( "
		SELECT n.nid FROM {node} n
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language
		ORDER BY n.sticky DESC, n.created DESC",
			array(
				":status" => '1',
				":type"   => "case_history",
				":language"   => $language->language
			)
		);
		$worksId = $result->fetchCol();
		//$works    = array_reverse( node_load_multiple( $worksId ), true);
		$works    = node_load_multiple( $worksId );
		$variables['worksList'] = $works;

		/* Cerca i clienti */
		$clientiVid = 2;
		$clienti = i18n_taxonomy_get_tree($clientiVid,'und',0,null,true);
		$variables['clientiList'] = $clienti;

		/* Cerca le sedi */
		$sediVid = 3;
		$sedi = i18n_taxonomy_get_tree($sediVid,$language->language,0,null,true);
		$variables['sediList'] = $sedi;
	}

	// CASE
	if( $pagePath[0] == 'works' && arg(0) == 'node' ) {
		switch($language->language) {
			case 'it':
				$variables['fabText'] = 'Case Study';
				break;
			case 'en':
				$variables['fabText'] = 'Case Study';
				break;
			default:
				$variables['fabText'] = 'Case Study';
		}
		$variables['backToWorks'] = true;
	}

	// ENGINE
	if($pagePath[0] == 'engine') {
		/*switch($language->language) {
			case 'it':
				$variables['fabText'] = 'Engine';
				break;
			case 'en':
				$variables['fabText'] = 'Engine';
				break;
			default:
				$variables['fabText'] = 'Engine';
		}*/
		$variables['isEngine'] = true;
	}

	// GLOBAL BUSINESS
	if(arg(0) == 'network') {
		$variables['fabText'] = 'Network';

		/* Cerca i network */
		$networkVid = 4;
		$network = i18n_taxonomy_get_tree($networkVid,$language->language,0,null,true);
		$variables['networkList'] = $network;
	}

	/*dpm(arg());
	dpm($pagePath);*/
}

/**
 * Override or insert variables into the node template.
 */
function laf_preprocess_node(&$variables) {
  $variables['submitted'] = t('Published by !username on !datetime', array('!username' => $variables['name'], '!datetime' => $variables['date']));
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
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
function laf_preprocess_region(&$variables, $hook) {
  // Use a bare template for the content region.
  if ($variables['region'] == 'content') {
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
function laf_preprocess_block(&$variables, $hook) {
  // Use a bare template for the page's main content.
  if ($variables['block_html_id'] == 'block-system-main') {
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
function laf_process_block(&$variables, $hook) {
  // Drupal 7 should use a $title variable instead of $block->subject.
  $variables['title'] = $variables['block']->subject;
}

/**
 * Changes the search form to use the "search" input element of HTML5.
 */
function laf_preprocess_search_block_form(&$vars) {
  $vars['search_form'] = str_replace('type="text"', 'type="search"', $vars['search_form']);
}

/**
 * Remove css system files from frontend
 */
function laf_css_alter(&$css) {
	if( !user_is_logged_in() && arg(0) !== 'user' ) {
		// Remove Drupal core css
		$exclude = array(
			'modules/aggregator/aggregator.css' => FALSE,
			'modules/block/block.css' => FALSE,
			'modules/book/book.css' => FALSE,
			'modules/comment/comment.css' => FALSE,
			'modules/dblog/dblog.css' => FALSE,
			'modules/field/theme/field.css' => FALSE,
			'modules/file/file.css' => FALSE,
			'modules/filter/filter.css' => FALSE,
			'modules/forum/forum.css' => FALSE,
			'modules/help/help.css' => FALSE,
			'modules/menu/menu.css' => FALSE,
			'modules/node/node.css' => FALSE,
			'modules/openid/openid.css' => FALSE,
			'modules/poll/poll.css' => FALSE,
			'modules/profile/profile.css' => FALSE,
			'modules/search/search.css' => FALSE,
			'modules/statistics/statistics.css' => FALSE,
			'modules/syslog/syslog.css' => FALSE,
			'modules/system/admin.css' => FALSE,
			'modules/system/maintenance.css' => FALSE,
			'modules/system/system.css' => FALSE,
			'modules/system/system.admin.css' => FALSE,
			'modules/system/system.base.css' => FALSE,
			'modules/system/system.maintenance.css' => FALSE,
			'modules/system/system.messages.css' => FALSE,
			'modules/system/system.menus.css' => FALSE,
			'modules/system/system.theme.css' => FALSE,
			'modules/taxonomy/taxonomy.css' => FALSE,
			'modules/tracker/tracker.css' => FALSE,
			'modules/update/update.css' => FALSE,
			'modules/user/user.css' => FALSE,
			'misc/vertical-tabs.css' => FALSE,

			// Remove contrib module CSS
			drupal_get_path('module', 'views') . '/css/views.css' => FALSE,
			drupal_get_path('module', 'ckeditor') . '/css/ckeditor.css' => FALSE,
			drupal_get_path('module', 'ctools') . '/css/ctools.css' => FALSE,
		);
		$css = array_diff_key($css, $exclude);
	}
}

function getExcerpt($str, $startPos=0, $maxLength=100) {
	if(strlen($str) > $maxLength) {
		$excerpt   = substr($str, $startPos, $maxLength-3);
		$lastSpace = strrpos($excerpt, ' ');
		$excerpt   = substr($excerpt, 0, $lastSpace);
		$excerpt  .= '...';
	} else {
		$excerpt = $str;
	}

	return $excerpt;
}

function findCaseFromCliente($cliente) {
	global $language;
	$tid = $cliente->tid;

	$result        = db_query( "
		SELECT n.nid FROM {node} n
		INNER JOIN {field_data_field_cliente} t
		ON n.nid = t.entity_id
		WHERE n.status = :status
		AND n.type = :type
		AND n.language = :language
		AND t.field_cliente_tid = :tid
		ORDER BY created DESC",
		array(
			":status" => '1',
			":type"   => "case_history",
			":tid"   => $tid,
			":language"   => $language->language
		)
	);
	$case_id = $result->fetchAll();
	foreach($case_id as $node) {
		$cases[] = node_load( $node->nid );
	}
	if( isset($cases) ) return $cases;
	else return false;
}

function translatePath($path,$language) {
	$translatedPath = translation_path_get_translations($path);

	if( is_array($translatedPath) && isset( $translatedPath[$language->language] ) ) {
		$redirect = base_path() . $language->language . '/' . drupal_get_path_alias( $translatedPath[$language->language], $language->language );
	} elseif( drupal_valid_path( $path  ) ) {
		$redirect = base_path() . $language->language . '/' . $path;
	}  else {
		$redirect = base_path() . $language->language;
	}
	return $redirect;
}