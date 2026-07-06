<?php

class ServiceRouter{
    protected $city;
protected $service;
public static $baseurl = "https://milani.ca";

function __construct($city,$service){
$this->city=$city;
$this->service=$service;
}

function getFullUrl(){
return self::$baseurl . '/' . $this->city . '/' . $this->service;
}


function isValidService(){
    $allowedServices=["electrician", "solar", "roofing"];
return in_array($this->service, $allowedServices);
}

public static function getBaseUrl() {
    return self::$baseurl;
    //self- current class, scope resolution operator ::, this means object data , static means class data, to avoid
    //duplicating values we have made base url static so that there is one shared value.
}
}

$route1 = new ServiceRouter("toronto", "electrician");
$route2 = new ServiceRouter("vancouver", "plumbing"); // invalid
//echo $route1;// route 1 is object and echo prints string so this is not right way

echo $route1->getFullUrl();
echo "<br>";

echo $route1->isValidService() ? "Valid" : "Invalid";
var_dump($route1);// full object

echo "<br>";
echo "<br>";

class SEORouter extends ServiceRouter{
function getPageTitle(){
return "Best {$this->service} in {$this->city} | Milani";
}
  // class overriding parent's method: Parent ka getFullUrl override karo — trailing slash add karo:
    function getFullUrl() {
        return parent::getFullUrl() . '/';  // ← parent ka result + '/'
    }
    function getMetaDescription() {
return "Looking for {$this->service} in {$this->city}? Milani provides top quality {$this->service} services.";
    }

    function isValidCity(){
 $allowedCities= ["toronto", "vancouver", "calgary"];
return in_array($this->city, $allowedCities);
    }
  
 
}
echo "<br>";
$seo1 = new SEORouter("toronto", "electrician");
echo $seo1->getPageTitle();
echo "<br>";
echo $seo1->getFullUrl();
echo "<br>";
echo $seo1->getMetaDescription();
echo "<br>";
echo $seo1->isValidCity();

// public    → sabke liye — bahar, andar, child — sab
// protected → class + child — bahar nahi
// private   → sirf apni class — child bhi nahi