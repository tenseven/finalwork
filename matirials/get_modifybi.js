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
localStorage.setItem("modifyid",id);
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
        var picture_div=document.getElementById("picture_block");
        var picture_addr=get_book.errmsg[2];
        var name=get_book.errmsg[0];
        var author=get_book.errmsg[1];
        var classification=get_book.errmsg[3];
        var introduction=get_book.errmsg[4];
        var comeout_year=get_book.errmsg[5];
        var publication=get_book.errmsg[6];
        var down_addr=get_book.errmsg[7];
        var down_times=get_book.errmsg[8];
        document.getElementById("bookname").setAttribute("value",name);
        document.getElementById("author").setAttribute("value",author);
        document.getElementById("classification").setAttribute("value",classification);
        document.getElementById("comeout_year").setAttribute("value",comeout_year);
        document.getElementById("intro").defaultValue=introduction;
        document.getElementById("publication").setAttribute("value",publication);
        
    }
}
get_book_info.send(send_book_number);