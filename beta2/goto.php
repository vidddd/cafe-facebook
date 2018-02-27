<?php
$url = 'https://www.facebook.com/McDonaldsSpain/app/327845837720712/';
if(is_mobile_device()){
  $url = 'https://cafe.promofb.es/';
  } header('Location: '.$url);


  function is_mobile_device() {    $agent=$_SERVER['HTTP_USER_AGENT'];
    if( strpos($agent,"Android") !== FALSE
     || strpos($agent,"IOS") !== FALSE
     || strpos($agent,"iPhone") !== FALSE
     || strpos($agent,"iPad") !== FALSE
      || strpos($agent,"iPod") !== FALSE
      || strpos($agent,"Symbian") !== FALSE
      || strpos($agent,"BlackBerry") !== FALSE
      || strpos($agent,"Opera Mini") !== FALSE
      || strpos($agent,"Phone") !== FALSE    )
      {
        return true;
       }else{
         return false;
}}?>
