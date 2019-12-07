function check(){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","login.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var number=document.getElementById('number').value;
    var password=document.getElementById('pwd').value;
    var datas={
        "student_number":number,
        "password":password
    };
    var json_datas=JSON.stringify(datas);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var judge=myresponse.errcode;
            var get_errmsg=myresponse.errmsg;
            if(judge==0){
                window.location.href="./shouye.html";
            }else{
                document.getElementById("response_msg").innerHTML='<img src="photo/jinggao32px.png">&nbsp&nbsp&nbsp'+get_errmsg;
            }
        }
    }
    xhr.send(json_datas);
}
function display_login(){
    document.getElementById("change_signup").style.display='none';
    document.getElementById("change_login").style.display='block';
    document.getElementById("login_border").style.borderColor="white";
    document.getElementById("login_border").style.color="white";
    document.getElementById("signup_border").style.borderColor="black";
    document.getElementById("signup_border").style.color="black";

}
function display_signup(){
    document.getElementById("change_signup").style.display='block';
    document.getElementById("change_login").style.display='none';
    document.getElementById("change_signup").style.paddingTop='9%';
    document.getElementById("change_signup").style.paddingLeft='36%';
    document.getElementById("signup_border").style.borderColor="white";
    document.getElementById("signup_border").style.color="white";
    document.getElementById("login_border").style.borderColor="black";
    document.getElementById("login_border").style.color="black";

}
function button_ani2(){
    document.getElementById("input2").style.borderColor="wheat";
    document.getElementById("input2").style.color="wheat";
}
function button_huanyuan2(){
    document.getElementById("input2").style.borderColor="white";
    document.getElementById("input2").style.color="white";
}
function button_ani1(){
    document.getElementById("input1").style.borderColor="wheat";
    document.getElementById("input1").style.color="wheat";
}
function button_huanyuan1(){
    document.getElementById("input1").style.color="white";
    document.getElementById("input1").style.borderColor="white";
}