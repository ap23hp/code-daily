<?php
if ( ! defined( 'ABSPATH' ) ) exit;

function milani_get_all_cities() {
    return [
        'vancouver' => [ 'name' => 'Vancouver', 'phone' => '604-456-8888' ],
        'calgary'   => [ 'name' => 'Calgary',   'phone' => '403-399-9999' ],
    ];
}

// Route register karo
add_action( 'rest_api_init', function() {
    register_rest_route( 'milani/v1', '/cities', [
        'methods'             => 'GET',
        'callback'            => 'milani_api_cities',
        'permission_callback' => '__return_true',
    ]);
});

// Callback function
function milani_api_cities() {
    $cities = milani_get_all_cities();
    $result = [];
    foreach( $cities as $slug => $data ) {
        $result[] = [
            'slug'  => $slug,
            'name'  => $data['name'],
            'phone' => $data['phone'],
        ];
    }
    return $result;
}


//How would you expose custom data via the WordPress REST API?"
//use `register_rest_route` with a custom namespace 
// like `milani/v1`, define a GET endpoint, and 
// return clean formatted data from a callback function — 
// only the fields the frontend actually needs, 
// not the full WP post object."

