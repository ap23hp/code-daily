
<?php
// Step 1 — REST API ko batao ki yeh route exist karta hai
add_action( 'rest_api_init', function() {
    register_rest_route(
        'milani/v1',   // namespace — tumhara plugin
        '/cities',     // route — URL ka last part
        [
            'methods'             => 'GET',
            'callback'            => 'milani_api_cities',
            'permission_callback' => '__return_true',
        ]
    );
});

// Step 2 — Jab URL hit ho toh yeh function chale
function milani_api_cities() {
    
    // cities.php se sari cities lo
    $cities = milani_get_all_cities();
    
    // Empty array — yahan clean data daalna hai
    $result = [];
    
    // Har city ke liye ek clean object banao
    foreach( $cities as $slug => $data ) {
        $result[] = [
            'slug'  => $slug,
            'name'  => $data['name'],
            'phone' => $data['phone'],
        ];
    }
    
    // Return karo — WordPress khud JSON banayega
    return $result;
}

// milanielec1dev.wpenginepowered.com/wp-json/milani/v1/cities

// [
//     { "slug": "vancouver", "name": "Vancouver", "phone": "604-456-8888" },
//     { "slug": "calgary",   "name": "Calgary",   "phone": "403-399-9999" },
//     { "slug": "edmonton",  "name": "Edmonton",  "phone": "780-999-3333" }
// ]