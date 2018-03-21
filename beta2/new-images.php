<?php
opcache_reset();

//just a random name for the image file
if($_GET['idcafe']) {
  $random = $_GET['idcafe'];
} else {
  $random = rand(100, 1000);
}
if($_GET['fondo']) {
  $fondo = $_GET['fondo'];
} else {
  $fondo = '1';
}

if($_GET['taza']) {
  $taza = $_GET['taza'];
} else {
  $taza = '1';
}
if($_GET['tema']) {
  $tema = $_GET['tema'];
} else {
  $tema = '1';
}
if($_GET['texto']) {
  $texto = $_GET['texto'];
} else {
  $texto = '1';
}

$base = imagecreatefromjpeg("images/visor/fondo".$fondo.".jpg");
imagealphablending( $base, true );
imagesavealpha( $base, true );

$temp = imagecreatefrompng("images/visor/taza".$taza.".png");
$temp2 = imagecreatefrompng("images/visor/tema".$tema.".png");
$temp3 = imagecreatefrompng("images/visor/texto".$texto.".png");

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

   	echo $random;
/*
if(imagecopyresampled($thumb, $origen,85,0,0,0,500,500,500,500)) {
//  echo $random.'-2  ';
  imagejpeg($thumb, "tmp/$random.jpg", 100);

  echo '<img src="tmp/$random.jpg" />';
} else {
  //echo "error";
}*/
