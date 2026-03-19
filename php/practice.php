<?php
//this stop anyone from accessing our file directly from browser
if(!defined('ABSPATH')) exit;

function milani_get_all_cities(){
    return [
'vancouver'=>['name'=>'vancouver', 'phone'=>'405373634'],
'calgary'   => [ 'name' => 'Calgary',   'phone' => '403-399-9999' ],
    ];

}

function milani_register_cpt(){
    register_post_type('city',[
        'public'=>true,
        'label'=>'Cities',
        'rewrite'=>['slug'=>"", 'with_front'=>false],
    ]);
}

add_action('init','milani_register_cpt')


// foreach( $cities as $slug => $data ) {
//     $cityname = $data['name'];  // 
//     echo $cityname;
// } 

function milani_get_current_city() {
    // current page ka pura url path --> $SERRVER[REQUEST_URI]
    $path  = trim( $_SERVER['REQUEST_URI'], '/' );
    $parts = explode( '/', $path );// string ko todta hai ek character se and array banata hai
    return $parts[0];
}
add_shortcode('milani_city',function(){
$cities=milani_get_all_cities()
$slug=milani_get_current_city()

   return $milani_city=$cities[$slug]['name']



})