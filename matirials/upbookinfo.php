<?php
header('Content-Type: application/json');
include_once("connect.php");
session_start();    
if($_SESSION['admin_number']==null){
    $err_msg=[
        'number'=>"3"
    ];
    echo json_encode($err_msg);
    return 0;
 }
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);

extract($de_datas,EXTR_OVERWRITE);
$bookname=htmlspecialchars($bookname);
$author=htmlspecialchars($author);
$publication=htmlspecialchars($publication);
$comeout_year=htmlspecialchars($comeout_year);
$classification=htmlspecialchars($classification);
$intro=htmlspecialchars($intro);
$photo_path="photo/moren.jpg";
$sql=$con->prepare("INSERT INTO book (name,author,picture,classification,introduction,comeout_year,publication) VALUES(
    ?,?,?,?,?,?,?)" );
$sql->bind_param("sssssss",$bookname,$author,$photo_path,$classification,$intro,$comeout_year,$publication);
$sql->execute();
$get_newid=mysqli_query($con,"SELECT LAST_INSERT_ID()");
$value = mysqli_fetch_array($get_newid);
$down_addr="wenjian/book".$value[0].".pdf";
$update=mysqli_query($con,"UPDATE book SET down_addr='$down_addr' WHERE id='$value[0]' ");

$_SESSION['down_addr']=$down_addr;
$_SESSION['newest_id']=$value[0];
$json_format=[
    'errcode'=>"0",
    'addr'=>$down_addr
];
echo json_encode($json_format);


