//register cpt
<?php
function milani_register_cpt(){
    register_post_type('city',[
    'public'=>true,
    'label'=>'Cities',
    'rewrite'=> ['slug'=> "",'with_front'=>false ],

    ]);
}
add_action('init','milani_register_cpt');

function milani_get_all_cities() {
    return [
        'vancouver' => [ 'name' => 'Vancouver', 'phone' => '604-456-8888' ],
        'calgary'   => [ 'name' => 'Calgary',   'phone' => '403-399-9999' ],
        'edmonton'  => [ 'name' => 'Edmonton',  'phone' => '780-999-3333' ],
        'victoria'  => [ 'name' => 'Victoria',  'phone' => '250-900-0000' ],
        'kelowna'   => [ 'name' => 'Kelowna',   'phone' => '250-800-0000' ],
    ];
}

function milani_get_current_city(){
    $path=trim($_SERVER['REQUEST_URI'],"/");
    $parts=explode("/",$path);
    return $parts[0];
}
add_shortcode('milani_city',function(){
$cities=milani_get_all_cities();
$slug=milani_get_current_city();
return $milani_city=$cities[$slug]['name'];
});
