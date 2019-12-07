<?php
session_start();
if($_SESSION['admin_number']==null){
   $err_msg=[
       'number'=>"3"
   ];
   echo json_encode($err_msg);
   return 0;
}
$down_addr=$_SESSION["down_addr"];
$checknew=$_SESSION["checknew"];
echo($checknew);
if($checknew==0){
    $server_name = $down_addr;
    if($_FILES['ebook']['error']>0){
        die("出错了".$_FILES['ebook']['error'].$_FILES['ebook']['type']);
    }
    if($_FILES['ebook']['type']=="application/pdf"){
          if(move_uploaded_file($_FILES['ebook']['tmp_name'],$server_name)){
              echo ("修改成功！".$server_name.$_FILES['ebook']['name']); 
              sleep(3); header("location:modifybook.html");
           }
        }else{
            echo("请检查格式（必须为pdf）或大小（小于10M）");
            sleep(5); header("location:modifybook.html");
     }
}else{
    echo("修改成功");
    sleep(10); header("location:upwenjian.html");
}