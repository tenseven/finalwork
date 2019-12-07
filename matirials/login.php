<?php
header('Content-Type: application/json');
include_once("connect.php");
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$user_number=htmlspecialchars($student_number);
$password=htmlspecialchars($password);
$sql=$con->prepare("SELECT sno,password FROM user_info WHERE sno=?");
$sql->bind_param("s",$user_number);
$sql->execute();
$result_array=$sql->get_result();
$infoarray=mysqli_fetch_array($result_array);
function json_data($errcode,$errmsg,$data){
    $json_format=[
        'errcode'=>$errcode,
        'errmsg'=>$errmsg,
        'data'=>$data
    ];
    echo json_encode($json_format);
}

if($infoarray!=null && $password==$infoarray[1]){
    session_start();
    $_SESSION["sno"]=$user_number;
    json_data("0","登录成功",null);
}else{
    json_data("1","未注册或密码不正确",null);
}

mysqli_close($con);