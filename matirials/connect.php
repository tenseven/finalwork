<?php
header('Content-Type: text/html; charset=utf-8');
$host = 'localhost';
$user = 'root';
$pass = '';
$con = mysqli_connect($host, $user, $pass,"library");
mysqli_query($con,"SET names UTF8");
mysqli_set_charset($con,"utf8");
$timezone="Asia/Shanghai";
date_default_timezone_set($timezone); 