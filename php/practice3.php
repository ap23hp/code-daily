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
//[milani_city_list] shortcode banao jo:
//1. WP_Query se sari cities fetch kare
//2. Har city ka naam aur phone number return kare

add_shortcode('milani_city_list',function(){
$query = new WP_Query([
    'post_type'      => 'city',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
]);

if($query->have_posts()) {
    $output="";
    while($query->have_posts()) {
        $query->the_post();
$title = get_the_title();

$phone = get_post_meta( get_the_ID(), 'milani_phone', true );
$output .= $title . ' — ' . $phone . '<br>';
    }
    wp_reset_postdata();
}
return $output;
})


//1. milani_get_current_city() → current city slug
//2. WP_Query + meta_query     → us city ki services
//3. Loop → titles return karo

add_shortcode('milani_current_services', function() {
    $slug  = milani_get_current_city();
    
    $query = new WP_Query([
        'post_type'      => 'city_service',  
        'posts_per_page' => -1,
        'post_status'    => 'publish',
        'meta_query'     => [
            [
                'key'   => 'milani_city',
                'value' => $slug,
            ]
        ]
    ]);

    $output = "";
    if($query->have_posts()) {
        while($query->have_posts()) {
            $query->the_post();
            $output .= get_the_title() . '<br>';
        }
        wp_reset_postdata();
    }
    return $output;
});

add_shortcode('milani_current_service',function(){
    $slug=milani_get_current_city();
    $query=new WP_Query([
        'post_type'=>'city_service',
        'posts_per_page'=>-1,
        'post_status'=>'publish',
        'meta_query'=>[
            [
                'key'=>'milani_city',
                'value'=>$slug
            ]
        ]
    ]);
    $output="";
     if($query->have_posts()){
    while($query->have_posts()){
       
  $query->the_post();
        $title=get_the_title();
        $output.=$title .'<br>';
        }
      wp_reset_postdata() ;
    }
    return $output;
})