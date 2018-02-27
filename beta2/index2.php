<?php
/*if($_SERVER["HTTPS"] != "on"){ header("Location: https://" . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"]);
    exit();
  }*/
session_start();
//opcache_reset();
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
  echo $twig->render('index2.html', array("compartir"=> 1, "cafeid" => $_GET['cafeid']));
} else {
  echo $twig->render('index2.html', array("idcafe"=> uniqid()));
}
