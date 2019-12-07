function transtodelete(id){
    var bookid=id;
    var xhr=new XMLHttpRequest();
    xhr.open("POST","admin_delete.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var againconfirm=window.confirm("确认删除?");
    
    if(againconfirm){
        var datas={
            "bookid":bookid
        };
        var json_datas=JSON.stringify(datas);
        xhr.onreadystatechange = function(){
            if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
                var myresponse=JSON.parse(this.responseText);
                var judge=myresponse.errcode;
                var get_errmsg=myresponse.errmsg;
                if(judge==0){
                   alert(get_errmsg);
                }else{
                    alert(get_errmsg);
                }
            }
        }
        xhr.send(json_datas);
        
    }
}
function transtomodify_id(id){
    
}