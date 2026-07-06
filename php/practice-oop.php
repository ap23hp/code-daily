<?php
class City{
    //properties
   public $name;
   private $phone;
   public $slug;
public $coords;
   //CONSTRUCTOR
//is automatically called each time a new object is created from a class,
public function __construct($slug,$name,$phone,$coords){
$this->slug=$slug;
$this->name=$name;
$this->phone=$phone;
$this->coords=$coords;
}
//method
public function getInfo(){
    return $this->name.'-' . $this->phone;
}
public function getUrl(){
    return '/' . $this->slug . '/';
}
public function isServiceable(){
    return true;
}

public function getPhone(){
    return $this->phone;
}
public function getCoords(){
    return [
         'lat' => $this->coords[0],
        'lng' => $this->coords[1],
    ];
}

public static function create($slug,$name,$phone,$coords){
 return new self($slug, $name, $phone, $coords);
}
}

//object

$vancouver = new City('vancouver', 'Vancouver', '604-456-8888', [49.28, -123.12]);
echo $vancouver->getUrl();        // → '/vancouver/'
echo $vancouver->isServiceable(); // → true
echo $vancouver->getPhone();        

$vancouver = City::create('vancouver', 'Vancouver', '604-456-8888', [49.28, -123.12]);