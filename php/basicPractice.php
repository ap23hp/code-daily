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

