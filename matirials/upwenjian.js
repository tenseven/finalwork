function upbookinfo(){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","upbookinfo.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var bookname=document.getElementById('bookname').value;
    var author=document.getElementById('author').value;
    var publication=document.getElementById('publication').value;
    var comeout_year=document.getElementById('comeout_year').value;
    var classification=document.getElementById('classification').value;
    var intro=document.getElementById('intro').value;
    console.log("intro:"+intro);
    if(bookname=="" || author=="" || publication=="" || comeout_year=="" || classification=="" ||intro==""){
        var get_res_box=document.getElementById("responsebox");
        var res_msg=document.createElement("div");
        res_msg.innerHTML="信息完整"
        get_res_box.append(res_msg);
        alert("信息不完整")
    }else{
    var datas={
        "bookname":bookname,
        "author":author,
        "publication":publication,
        "comeout_year":comeout_year,
        "classification":classification,
        "intro":intro
    };
    var json_datas=JSON.stringify(datas);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var errcode=myresponse.errcode;
            if(errcode==0){
                var get_res_box=document.getElementById("responsebox");
                var res_msg=document.createElement("div");
                res_msg.innerHTML="上传成功"
                get_res_box.append(res_msg);
                alert("上传成功")
            }else{
                alert("上传失败");
            }
        }
    }
    xhr.send(json_datas);
}
}