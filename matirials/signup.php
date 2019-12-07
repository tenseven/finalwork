<?php
header('Content-Type: application/json');
include_once("connect.php");
$get_jdatas=file_get_contents('php://input');
$de_datas=json_decode($get_jdatas,true);
extract($de_datas,EXTR_OVERWRITE);
$user_number=htmlspecialchars($student_number);
$init_password=htmlspecialchars($init_password);
$sec_password=htmlspecialchars($sec_password);
function json_data($errcode,$errmsg){
    $json_format=[
        'errcode'=>$errcode,
        'errmsg'=>$errmsg
    ];
    echo json_encode($json_format);
}
if($user_number==null || $init_password==null || $sec_password==null){
    return json_data("111","信息还未填完，请检查");
    
}
if($sec_password==$init_password){
    $sql=$con->prepare("SELECT sno,password FROM user_info WHERE sno=?");
    $sql->bind_param("s",$user_number);
    $sql->execute();
    $result_array=$sql->get_result();
    $infoarray=mysqli_fetch_array($result_array);
    if($infoarray==null){
        json_data("131","无权限注册，若有疑问请与学院负责人联系。");
    }else{
        if($infoarray[1]==null){
           $sql_update=$con->prepare("UPDATE user_info SET password=? WHERE sno=?");
           $sql_update->bind_param("ss",$sec_password,$user_number);
           $sql_update->execute();
        json_data("0","注册成功！请继续登录");
        }else{
            json_data("124","此用户已注册");
        }
    }
}else{
    json_data("134","请再次确认密码");
}
mysqli_close($con);