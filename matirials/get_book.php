<?php
header('Content-Type: application/json');
include_once("connect.php");
$json= file_get_contents('php://input');
$json_data=json_decode($json,true);
extract($json_data,EXTR_OVERWRITE);
$id=htmlspecialchars($id);
session_start();
if($_SESSION['sno']==null && $_SESSION['admin_number']==null){
    $err_msg=[
        'errmsg'=>"无权限登录"
    ];
    echo json_encode($err_msg);
    return 0;
}
$sql=$con->prepare("SELECT name,author,picture,classification,introduction,comeout_year,publication,down_addr,down_times FROM book WHERE id=?");
$sql->bind_param("s",$id);
$sql->execute();
$result_array=$sql->get_result();
$infoarray=mysqli_fetch_array($result_array);
$json_format=[
    'errmsg'=>$infoarray
];
echo json_encode($json_format);
mysqli_close($con);