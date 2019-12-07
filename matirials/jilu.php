<?php
header('Content-Type: application/json');
include_once("connect.php");
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$id=htmlspecialchars($id);
session_start();
$sno=$_SESSION['sno'];
$sql=$con->prepare("INSERT INTO downloadlog (sno,bookid) VALUES (?,?)");
$sql->bind_param("ss",$sno,$id);
$sql->execute();
if($sql){
    $json_format=[
        'errcode'=>"0",
        'errmsg'=>"记录成功"
    ];
    echo json_encode($json_format);
}else{
    $json_format=[
        'errcode'=>"323",
        'errmsg'=>"记录失败"
    ];
    echo json_encode($json_format);
}
