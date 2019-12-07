
    var xhr=new XMLHttpRequest();
    xhr.open("POST","search.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var search_content=localStorage.getItem("search_content");
    var datas={
        "search_content":search_content
    };
    var json_datas=JSON.stringify(datas);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var nums=myresponse.nums;
            var bookinfo=myresponse.errmsg;
            var operatestatus=myresponse.right;
            var getboxid=document.getElementById("book_block");
            getboxid.innerHTML="";
            var write_nums=document.createElement("div");
            write_nums.innerHTML='<img src="photo/tongji32px.png">&nbsp&nbsp'+nums+"条结果";
            write_nums.style="font-size:110%;margin-bottom:3%";
            getboxid.append(write_nums);
            getboxid.style="margin-left:22%;margin-top:2%;"
            var createtab=document.createElement("table");
            createtab.setAttribute("border",2);
            createtab.setAttribute("rules","rows");
            createtab.setAttribute("cellpadding",10);
            createtab.setAttribute("cellspacing",0);
            //createtab.setAttribute("word-wrap","break-word");
            
            createtab.style.width="100%";
            createtab.style.tableLayout="fixed";
            createtab.style.fontSize="140%";
            


            createtab.innerHTML='<tr><th>书名</th><th>作者</th><th>类别</th></tr>';
            console.log("status"+operatestatus);
            getboxid.append(createtab);
            if(operatestatus==0){
                createtab.innerHTML='<tr><th>书名</th><th>作者</th><th>类别</th></tr>';
                getboxid.append(createtab);
               for(i=0;i<nums;i++){
                  var createtab2=document.createElement("tr");
                  createtab2.innerHTML='<td><a id="searchname"  href="/matirials/book.html?id='+bookinfo[i].id+'">'+bookinfo[i].name+'</a></td><td style="text-align:center;">'+bookinfo[i].author+'</td><td style="text-align:center;">'+bookinfo[i].classification+'</td>';
                  createtab.append(createtab2);

                }
            }else{
                createtab.innerHTML='<tr><th><img src="photo/name32.png" ></th><th><img src="photo/zuozhe32px.png" ></th><th><img src="photo/fenlei32px.png" ></th><th>修改</th><th>删除</th></tr>';
                getboxid.append(createtab);
                for(i=0;i<nums;i++){
                    var createtab2=document.createElement("tr");
                    createtab2.innerHTML='<td><a id="searchname" style="     color:black;" href="/matirials/book.html?id='+bookinfo[i].id+'">'+bookinfo[i].name+'</a></td><td style="text-align:center;">'+bookinfo[i].author+'</td><td style="text-align:center;">'+bookinfo[i].classification+'</td><td style="text-align:center;"><a style="text-decoration:none" href="modifybook.html?id='+bookinfo[i].id+'"><img src="./photo/modifytubiao.png"></a></td><td style="text-align:center;"><input type="image" onclick=transtodelete("'+bookinfo[i].id+'") src="./photo/deletetubiao.png"></td>';
                    createtab.append(createtab2);
                  }

            }
            
        }
    }
    xhr.send(json_datas);
