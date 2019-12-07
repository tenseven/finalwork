var show_book=new XMLHttpRequest();
show_book.open("POST","show_book.php",true);
show_book.setRequestHeader('content-type','application/json');
var send_null=JSON.stringify();
show_book.onreadystatechange=function (){
    if(show_book.readyState==XMLHttpRequest.DONE && show_book.status==200){
        var get_reply=JSON.parse(this.responseText);
        var book_amount=get_reply.number;
        var book_table=document.getElementById("book_table");
        book_table.setAttribute("cellpadding",20);
        book_table.setAttribute("cellspacing",0);
        book_table.setAttribute("rules","rows");
        book_table.style.textAlign="center";
        book_table.style.width="100%";
        book_table.style.tableLayout="fixed";
        var create_th=document.createElement("tr");
        create_th.style.fontSize="130%";
        create_th.innerHTML='<th><img src="photo/fengmian32px.png"> 封面</th><th><img src="photo/shu32px.png">  书名</th><th><img src="photo/author32px.png">  作者</th>';
        book_table.append(create_th);

        for(times=0;times<book_amount;times++){
            var create_book_pic=document.createElement('tr');
            //create_book_pic.className='bookunit';
            console.log(get_reply.errmsg[times].id);
            create_book_pic.innerHTML='<td><a style="text-decoration:none;" href="/matirials/book.html?id='+get_reply.errmsg[times].id+'"><img src='+get_reply.errmsg[times].picture+' height="150px" width="120px" alt="暂无封面"></a></td>'+
            '<td ><a style="text-decoration:none;color:rgb(14,189,182);" href="/matirials/book.html?id='+get_reply.errmsg[times].id+'">'+get_reply.errmsg[times].name+'</a></td><td><a style="text-decoration:none;color:rgb(14,189,182);" href="/matirials/book.html?id='+get_reply.errmsg[times].id+'">'+get_reply.errmsg[times].author+'</a></td>'
            book_table.append(create_book_pic);
        }
        
        
    }
}
show_book.send(send_null);