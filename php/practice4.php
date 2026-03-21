<?php
$cities = [
    'vancouver' => ['name' => 'Vancouver', 'phone' => '604-456-8888'],
    'calgary'   => ['name' => 'Calgary',   'phone' => '403-399-9999'],
    'edmonton'  => ['name' => 'Edmonton',  'phone' => '780-999-3333'],
];

$slugs=array_keys($cities);
// → ['vancouver', 'calgary']
array_keys($cities)    // → ['vancouver', 'calgary']
array_values($cities)  // → [['name'=>'Vancouver'...], ['name'=>'Calgary'...]]
in_array('vancouver', $slugs)  // → true/false — value exist karta hai?
array_key_exists('vancouver', $cities)  // → true/false — key exist karti hai?

$result= array_filter($cities,function($data){
return $data['phone']='604-456-8888'
})

strtoupper('vancouver')  // → 'VANCOUVER'
strtolower('VANCOUVER')  // → 'vancouver'
ucfirst('vancouver')     // → 'Vancouver' — pehla letter capital
ucwords('ev charger installation') // → 'Ev Charger Installation'

$uppercaseletter=array_map($cities, function($data){
return strtoupper($data['name'])
})

//Keys preserve = original array ki keys same rehti hain
//Keys preserve nahi = 0, 1, 2 se start ho jaati hain


array_column($cities, 'name');
// → ['Vancouver', 'Calgary', 'Edmonton']

// array_column — shortcut:
// array_map — same kaam, zyada code:
array_map(function($data) {
    return $data['name'];
}, $cities)
// → ['vancouver'=>'Vancouver', 'calgary'=>'Calgary'] ← keys preserve
//Difference:
//array_column → keys preserve NAHI hoti — indexed array
//array_map    → keys preserve HOTI hain — associative array

$slugs = ['vancouver', 'calgary'];
$names = ['Vancouver', 'Calgary'];

$combined = array_combine($slugs, $names);
// → ['vancouver' => 'Vancouver', 'calgary' => 'Calgary']

$cities_json = wp_json_encode( array_combine(
    array_keys( milani_get_all_cities() ),   // ['vancouver', 'calgary']
    array_column( milani_get_all_cities(), 'name' )  // ['Vancouver', 'Calgary']
) );

// array_combine dono ko join karta hai:
// → ['vancouver' => 'Vancouver', 'calgary' => 'Calgary']

// wp_json_encode → JavaScript ke liye JSON banata hai:
// → {"vancouver":"Vancouver","calgary":"Calgary"}

// true → single value return karo:
$phone1 = get_post_meta($post_id, 'milani_phone', true);
// → '604-456-8888'  ← string

// false → array return karo:
$phone2 = get_post_meta($post_id, 'milani_phone', false);
// → ['604-456-8888']  ← array
//WordPress mein ek post ke liye same key ki multiple values ho sakti hain:

// Ek post pe multiple values same key se:
add_post_meta($post_id, 'milani_phone', '604-456-8888');
add_post_meta($post_id, 'milani_phone', '604-111-2222');

// false → sab values do:
get_post_meta($post_id, 'milani_phone', false);
// → ['604-456-8888', '604-111-2222']

// true → pehli value do:
get_post_meta($post_id, 'milani_phone', true);
// → '604-456-8888'

//in js
// const cities = ['vancouver', 'calgary', 'edmonton'];

// const result = cities.reduce((acc, city) => {
//     acc[city] = true;
//     return acc;
// }, {});
// Array ko ek single value mein compress karo
// Woh value kuch bhi ho sakti hai — number, object, string

$cities = ['vancouver', 'calgary', 'edmonton'];

// reduce in PHP
$result = array_reduce($cities, function($acc, $city) {
    $acc[$city] = true;
    return $acc;
}, []);

// → ['vancouver' => true, 'calgary' => true, 'edmonton' => true]
//Array → single value banana ho   → reduce
//Array → filter karna ho          → filter
//Array → transform karna ho       → map

function milani_get_phone( $city = 'vancouver' ) {
    $cities = milani_get_all_cities();
    return $cities[$city]['phone'] ?? 'N/A';
}

echo milani_get_phone();
echo milani_get_phone('calgary');
echo milani_get_phone('toronto');

// milani_get_phone()           → '604-456-8888'  — default vancouver
// milani_get_phone('calgary')  → '403-399-9999'  — calgary ka phone
// milani_get_phone('toronto')  → 'N/A'           — exist nahi karta → ??

//add_action ka third parameter — Priority
add_action('init', 'function_a', 10);   // priority 10
add_action('init', 'function_b', 5);    // priority 5
add_action('init', 'function_c', 20);   // priority 20


//1. function_b   → priority 5  — sabse pehle
//2. function_a   → priority 10

//4. function_c   → priority 20 — sabse baad

// Pehle CPT register karo — priority 10
add_action('init', 'milani_register_city_cpt', 10);

// Phir rewrite rules — CPT register hone ke baad
add_action('init', 'milani_rewrite_rules', 20);

//4th parameter — $accepted_args:
add_filter('post_type_link', 'milani_city_permalink', 10, 2);
//                                                         ↑
//                                              2 arguments accept karo
//                                              $post_link aur $post


//  Simple rule:
// Chota number  → pehle chalta hai
// Bada number   → baad mein chalta hai
// Same priority → jo pehle register hua woh pehle