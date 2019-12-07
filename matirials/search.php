<?php
header('Content-Type: application/json');
include_once("connect.php");
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$search_content=htmlspecialchars($search_content);
session_start();
$sno=$_SESSION["sno"];
if($search_content==null){
    $sql=$con->prepare("SELECT id,name,author,classification FROM book WHERE id IN (SELECT id FROM downloadlog WHERE sno=?)");
    $sql->bind_param("s",$sno);
    $sql->execute();
}else{
    $modi_search="%$search_content%";
    $sql=$con->prepare("SELECT id,name,author,classification FROM book WHERE name LIKE ? or author LIKE ? or classification LIKE ? ");
    $sql->bind_param("sss",$modi_search,$modi_search,$modi_search);
    $sql->execute();
}
$result_array=$sql->get_result();
$nums=0;
$all_array=array();
while($value = mysqli_fetch_array($result_array)) {
    array_push($all_array,$value);
    ++$nums;
}
$right=0;
if(isset($_SESSION["admin_number"])){
    $right=1;
}
$json_format=[
    'nums'=>$nums,
    'errmsg'=>$all_array,
    'right'=>$right
];
echo json_encode($json_format);