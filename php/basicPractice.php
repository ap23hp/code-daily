<?php

function milani_get_all_cities(){
    return [
        'vancouver'=>['name'=> "Vancouver", 'phone'=>"547484733",'province'=>'British Columbia'],
'calgary'=>['name'=> "calgary", 'phone'=>"44433333",'province'=> 'Alberta'],
'edmonton'=>['name'=> "edmonton", 'phone'=>"778884733",'province'=> 'Alberta'],
    ];
}
$cities=milani_get_all_cities();
$bcCities = array_filter($cities, function($data){
    return $data['province'] === 'British Columbia';
});

$names = array_map(function($data) {
    return $data['name'];
}, $cities);

$slugs = array_keys($cities);
print_r($slugs);
echo '<br>';
echo '<br>';
var_dump($bcCities);
echo '<br>';
echo '<br>';


print_r($bcCities);
echo '<br>';
echo '<br>';


foreach($bcCities as $slug => $data) {
    echo $slug . ' → ' . $data['name'] . '<br>';
}
echo '<br>';
echo '<br>';
print_r($names);


//$postal = "  v6b 1A1  ";  // user ne type kiya — messy

// Yeh karo:
// 1. Spaces hatao dono sides se
// 2. Uppercase banao
// 3. Space remove karo beech se — "V6B1A1"
// 4. Check karo — length 6 hai?
// 5. Pehle 3 characters nikalo — "V6B"
// 6. Last 3 characters nikalo — "1A1"
//trim(), strtoupper(), str_replace(), strlen(), substr()
$postal = "  v6b 1A1  ";
// Step 1 — trim
$step1 = trim($postal);

// Step 2 — uppercase
$step2 = strtoupper($step1);

// Step 3 — space remove
$step3 = str_replace(' ', '', $step2);

// Step 4 — length check
$length = strlen($step3);
echo $length === 6 ? "Valid length" : "Invalid length";

// Step 5 — pehle 3 chars
$first3 = substr($step3, 0, 3);

// Step 6 — last 3 chars
$last3 = substr($step3, 3, 3);

echo $step3;    // → "V6B1A1"
echo '<br>';
echo '<br>';
echo $first3;   // → "V6B"
echo '<br>';
echo '<br>';
echo $last3;    // → "1A1"

// Function banao: milani_get_phone($city, $default)
// → cities array se phone nikalo
// → agar city nahi mili → $default return karo
// → $default ka default value ho '000-000-0000'
// → ?? operator use karo

function milani_get_phone($city,$default= '000-000-0000'){
    $cities = milani_get_all_cities();
     return $cities[$city]['phone'] ?? $default;

}
echo milani_get_phone('vancouver');        // → '547484733'
echo '<br>';
echo milani_get_phone('toronto');          // → '000-000-0000'
echo '<br>';
echo milani_get_phone('toronto', 'N/A');   // → 'N/A'

