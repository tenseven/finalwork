<?php
header('Content-Type: application/json');
include_once("connect.php");
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$bookid=htmlspecialchars($bookid);
$sql=$con->prepare("DELETE FROM book WHERE id=?");
$sql->bind_param("s",$bookid);
$sql->execute();
function json_data($errcode,$errmsg){
    $json_format=[
        'errcode'=>$errcode,
        'errmsg'=>$errmsg
    ];
    echo json_encode($json_format);
}
if($sql){
    json_data("0","删除完成");
}else{
    json_data("325","删除失败");
}
