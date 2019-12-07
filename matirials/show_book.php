<?php
header('Content-Type: application/json');
include_once("connect.php");
$json= file_get_contents('php://input');
session_start();
if($_SESSION['sno']==null&&$_SESSION['admin_number']==null){
    $err_msg=[
        'number'=>"0"
    ];
    echo json_encode($err_msg);
    return 0;
}
$get_all=$con->query("SELECT * FROM book");
$book_nums=$get_all->num_rows;
$all_array=array();
while($value = mysqli_fetch_object($get_all)) {
    array_push($all_array,$value);
}
$json_format=[
    'number'=>$book_nums,
    'errmsg'=>$all_array
];
echo json_encode($json_format);
//$get_all=$con->prepare("SELECT * FROM book")
mysqli_close($con);
