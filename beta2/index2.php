<?php
/*if($_SERVER["HTTPS"] != "on"){ header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
  }*/
session_start();
opcache_reset();
//error_reporting(E_ALL);
require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/config.php';
$loader = new Twig_Loader_Filesystem('templates/');
$twig = new Twig_Environment($loader, array());
require_once __DIR__ . '/inc/db.class.php';
$db = new Database();

if(!$_SESSSION['idcafe']) {
  $_SESSION['idcafe'] = uniqid();
}

if($_GET['cafeid']) {

  $random = $_GET['cafeid'];

  $base = imagecreatefromjpeg("images/1000/fondo.jpg");
  imagealphablending( $base, true );
  imagesavealpha( $base, true );

  $temp = imagecreatefrompng("images/1000/taza.png");
  $temp2 = imagecreatefrompng("images/1000/humo.png");
  $temp3 = imagecreatefrompng("images/1000/texto.png");

    imagecopy($base,$temp,0,0,0,0,1000,1000);
    imagecopy($base,$temp2,0,0,0,0,1000,1000);
    imagecopy($base,$temp3,0,0,0,0,1000,1000);

     imagejpeg($base, "cafe-finals/".$random.".jpg", 100);

     $thumb = imagecreatetruecolor(1300, 1000);
   //  imagejpeg($thumb, "cafe-finals/$random-2.jpg");
   //  $image = imagecreatefromjpeg($filename);
     $origen = imagecreatefromjpeg("cafe-finals/$random.jpg");
     $backgroundColor = imagecolorallocate($thumb, 255, 255, 255);
     imagefill($thumb, 0, 0, $backgroundColor);
     if(imagecopyresized($thumb, $origen,150,0,0,0,1000,1000,1000,1000)) {
     //  echo $random.'-2  ';
       imagejpeg($thumb, "cafe-finals/$random-2.jpg", 100);
     } else {
       //echo "error";
     }

     	//echo $random;

  echo $twig->render('index2.html', array("compartir"=> 1, "cafeid" => $_GET['cafeid']));
} else {
  echo $twig->render('index2.html', array("idcafe"=> uniqid()));
}
