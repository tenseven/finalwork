function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var id=getQueryVariable("id");
var get_book_info=new XMLHttpRequest();
get_book_info.open("POST","get_book.php",true);
get_book_info.setRequestHeader('content-type','application/json');
var identi={
    'id':id
}
var send_book_number=JSON.stringify(identi);
get_book_info.onreadystatechange=function (){
    if(get_book_info.readyState==XMLHttpRequest.DONE && get_book_info.status==200){
        var get_book=JSON.parse(this.responseText);
        var picture_table=document.getElementById("info_table");
        picture_table.setAttribute("cellpadding",20);
        var picture_addr=get_book.errmsg[2];
        var name=get_book.errmsg[0];
        var author=get_book.errmsg[1];
        var classification=get_book.errmsg[3];
        var introduction=get_book.errmsg[4];
        var comeout_year=get_book.errmsg[5];
        var publication=get_book.errmsg[6];
        var down_addr=get_book.errmsg[7];
        var down_times=get_book.errmsg[8];
        
        picture_table.innerHTML='<tr><td rowspan="7"><img class="imgstyle" src="'+picture_addr+'" height="500px" width="450px"></td><td><img src="photo/shu32px.png">  书名：'+name+'</td><tr>'+
        '<tr><td><img src="photo/author32px.png">  作者：'+author+'</td></tr>'+'<tr><td><img src="photo/leibie32px.png">  类别：'+classification+'</td></tr>'+
        '<tr><td><img src="photo/chubanshe32px.png">  出版社：'+publication+'</td></tr>'+'<tr><td><img src="photo/nianfen32px.png">  出版日期：'+comeout_year+'</td></tr>'+'<tr><td><img src="photo/xiazai32px.png">  <a onclick=jilu('+id+') id="download_link" style="color:black;text-decoration:none;" href="'+down_addr+'">下载</a></td></tr>'+'<tr><td colspan="2"><img src="photo/jieshao32px.png"></br>'+ introduction+'</td></tr>';

    }
}
get_book_info.send(send_book_number);

function jilu(id){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","jilu.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var datas={
        "id":id
    };
    var json_datas=JSON.stringify(datas);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var judge=myresponse.errcode;
            var get_errmsg=myresponse.errmsg;
            console.log(get_errmsg);           
        }
    }
    xhr.send(json_datas);
}