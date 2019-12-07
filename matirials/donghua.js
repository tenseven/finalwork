function dis_hid(){
    document.getElementById("select_ebook").click();
}
function dis_hid2(){
    document.getElementById("submit_ebook").click();

}
function change_dengbox(){
    document.getElementById("denglubox").style.borderColor="black";
}
function huanyuan(){
    document.getElementById("denglubox").style.borderColor="white";
}
function change_confirmbox(){
    document.getElementById("confirmbox").style.borderColor="rgb(245, 178, 23, 0.95)";
    document.getElementById("confirmbox").style.color="rgb(245, 178, 23, 0.95)";
}
function huanyuanconfirm(){
    document.getElementById("confirmbox").style.borderColor="black";
    document.getElementById("confirmbox").style.color="black";
}
function upbookbox(){
    document.getElementById("select_book_box").style.borderColor="rgb(47, 173, 142)";
}
function disupbookbox(){
    document.getElementById("select_book_box").style.borderColor="white";
}
function playpic1(){
var content1=document.getElementById('bookname').value;
console.log(content1);
if(content1!=null){
    document.getElementById("pic1").style.display='block';
}
}
function playline(){
    var id=document.getElementById("searchname");
    id.style.textDecoration="underline";
    id.style.textDecorationColor="blue";
}
function disline(){
    var id=document.getElementById("searchname");
    id.style.textDecoration="none";
}
