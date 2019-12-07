function admin_login(){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","admin_login.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var number=document.getElementById('admin_number').value;
    var password=document.getElementById('password').value;
    var datas={
        "admin_number":number,
        "password":password
    };
    var json_datas=JSON.stringify(datas);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var judge=myresponse.errcode;
            var get_errmsg=myresponse.errmsg;
            if(judge==0){
                window.location.href="./upwenjian.html";
            }else{
                document.getElementById("response_msg").innerHTML='<img src="photo/jinggao32px.png">&nbsp&nbsp&nbsp'+get_errmsg;
            }
        }
    }
    xhr.send(json_datas);
}
