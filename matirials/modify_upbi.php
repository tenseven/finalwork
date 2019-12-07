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
$id=htmlspecialchars($id);
$checknew=htmlspecialchars($checknew);
$photo_path="photo/moren.jpg";
$sql=$con->prepare("UPDATE book SET name=?,author=?,picture=?,classification=?,introduction=?,comeout_year=?,publication=? WHERE id=?" );
$sql->bind_param("ssssssss",$bookname,$author,$photo_path,$classification,$intro,$comeout_year,$publication,$id);
$sql->execute();
$down_addr="wenjian/book".$id.".pdf";
$_SESSION['down_addr']=$down_addr;
$_SESSION['checknew']=$checknew;
$json_format=[
    'errcode'=>"0",
    'addr'=>$down_addr
];
echo json_encode($json_format);


