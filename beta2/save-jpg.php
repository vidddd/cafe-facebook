<?php

//just a random name for the image file
if($_POST['idcafe']) {
  $random = $_POST['idcafe'];
} else {
  $random = rand(100, 1000);
}

//$_POST[data][1] has the base64 encrypted binary codes.
//convert the binary to image using file_put_contents
$savefile = @file_put_contents("cafe-finals/$random.jpg", base64_decode(explode(",", $_POST['data'])[1]));

//if the file saved properly, print the file name
if($savefile){
  $thumb = imagecreatetruecolor(674, 500);
//  imagejpeg($thumb, "cafe-finals/$random-2.jpg");
//  $image = imagecreatefromjpeg($filename);
  $origen = imagecreatefromjpeg("cafe-finals/$random.jpg");
  $backgroundColor = imagecolorallocate($thumb, 255, 255, 255);
  imagefill($thumb, 0, 0, $backgroundColor);
  if(imagecopyresized($thumb, $origen,85,0,0,0,500,500,500,500)) {
  //  echo $random.'-2  ';
    imagejpeg($thumb, "cafe-finals/$random-2.jpg", 100);
  } else {
    //echo "error";
  }

	echo $random;
}



?>
