<!DOCTYPE html>
<html class="no-js">
<head>
    <?php print $head; ?>
    <!-- Set the viewport width to device width for mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title><?php print $head_title; ?></title>

    <!-- ** Open Graph Protocol * -->
    <meta property="og:title" content="La Fabbrica" />
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://www.lafabbrica.net/it/">
    <meta property="og:description" content="" />
    <meta property="og:image" content="">
    <meta property="og:site_name" content="La Fabbrica">

    <!-- ** Twitter Card * -->
    <!-- https://dev.twitter.com/docs/cards/validation/validator -->
    <meta name="twitter:title" content="La Fabbrica">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:url" content="http://www.lafabbrica.net/it/">
    <meta name="twitter:description" content="">
    <meta name="twitter:image:src" content="">

    <!-- ** Pre-Resolve DNS * -->
    <link rel="dns-prefetch" href="//google-analytics.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">

    <?php print $styles; ?>
    <?php print $scripts; ?>

    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9AXMhZoWj7xf4F8nvWOykIRQUZFlk27o"></script>

    <!--[if lte IE 8]>
    <script>
        window.location.href = 'http://outdatedbrowser.com/';
    </script>
    <![endif]-->
</head>

<body class="<?php print $classes; ?> <?php if(isset($bodyClass)) { echo $bodyClass; } ?>" <?php print $attributes;?>>

<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>

<script>
    var markers = {
        markerOfficeIconSvg : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-office.svg',
        markerOfficeIconPng : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-office.png',
        markerNetworkIconSvg : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-network.svg',
        markerNetworkIconPng : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-network.png',
        markerNetworkIconSvgActive : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-network-active.svg',
        markerNetworkIconPngActive : '<?php echo base_path() . path_to_theme() ; ?>/assets/img/marker-network-active.png'
    }
    var coord = {
        <?php if( isset($sediList) && is_array($sediList) ): ?>
        officeDefault : {
            value :
                <?php if(isset($sediList[0]->field_nazione['und']) && isset($sediList[0]->field_nazione['und'][0]['value'])){

                    ?>
                    'coord.office.<?php echo strtolower(str_replace(' ' , '_' , $sediList[0]->field_nazione['und'][0]['value'])); ?>'

                <?php } else { ?>
                    ''
                <?php } ?>


        },
        networkDefault : {
            value :
                <?php if(isset($sediList[0]->field_nazione['und']) && isset($sediList[0]->field_nazione['und'][0]['value'])){ ?>
                'coord.office.<?php echo strtolower(str_replace(' ' , '_' , $sediList[0]->field_nazione['und'][0]['value']) ); ?>.link'
                <?php } else { ?>
                    ''
                <?php } ?>
        },
        <?php endif; ?>

        <?php if( isset($sediList) && is_array($sediList) ): ?>
        office : {
            <?php foreach($sediList as $sede):
                if (isset($sede->field_nazione['und'][0]['value'])) {
            ?>
                <?php echo strtolower( str_replace(' ' , '_' , $sede->field_nazione['und'][0]['value']) ); ?> : {
                    link: 'office.<?php echo strtolower( str_replace(' ' , '_' , $sede->field_nazione['und'][0]['value']) ); ?>',
                    lat :
                        <?php echo isset($sede->field_geolocalizzazione['und'][0]['lat']) ? $sede->field_geolocalizzazione['und'][0]['lat'] : 0.0; ?>,
                    lng : <?php echo isset($sede->field_geolocalizzazione['und'][0]['lng']) ? $sede->field_geolocalizzazione['und'][0]['lng'] : 0.0; ?>
                },
            <?php } endforeach; ?>

        },
        <?php endif; ?>

        <?php if( isset($networkList) && is_array($networkList) ): ?>
        network : {
            <?php foreach($networkList as $network): ?>
            <?php
                if (isset($network->name)) {

                echo strtolower( str_replace( ' ' , '_' , $network->name) ); ?> : {
                link: 'network.<?php echo strtolower( str_replace( ' ' , '_' , $network->name) ); ?>',
                lat : <?php echo isset($network->field_geolocalizzazione['und'][0]['lat']) ? $network->field_geolocalizzazione['und'][0]['lat'] : 0.0; ?>,
                lng : <?php echo isset($network->field_geolocalizzazione['und'][0]['lng']) ? $network->field_geolocalizzazione['und'][0]['lng'] : 0.0; ?>
            },
            <?php } endforeach; ?>
        }
        <?php endif; ?>
    };

    Modernizr.load([
        {
            load: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
            complete: function () {
                if ( !window.jQuery ) {
                    Modernizr.load('<?php echo base_path() . path_to_theme() ; ?>/assets/js/jquery.min.js');
                }
            }
        },
        {
            //load: 'assets/js/app.js'
            load: '<?php echo base_path() . path_to_theme() ; ?>/assets/js/app.min.js'
        },{
            load: '<?php echo base_path() . path_to_theme() ; ?>/assets/js/custom.js'
        }
    ]);

    /** Google Analytics */

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-27121587-3', 'auto');
    ga('send', 'pageview');

</script>

</body>
</html>
