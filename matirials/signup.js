function signupup(){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","signup.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var init_number=document.getElementById('init_number').value;
    var init_pwd=document.getElementById('init_pwd').value;
    var second_pwd=document.getElementById('second_pwd').value;
    var datas={
        "student_number":init_number,
        "init_password":init_pwd,
        "sec_password":second_pwd
    };
    var json_datas=JSON.stringify(datas);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var judge=myresponse.errcode;
            var get_errmsg=myresponse.errmsg;
            if(judge==0){
                window.history.back(-1);
            }else{
                document.getElementById("response_msg2").innerHTML='<img src="photo/jinggao32px.png">&nbsp&nbsp&nbsp'+get_errmsg;
            }
        }
    }
    xhr.send(json_datas);
}