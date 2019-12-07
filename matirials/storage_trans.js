function trans_search_content(){
    var search_content=document.getElementById('search_content').value;
    localStorage.setItem("search_content", search_content);
    window.location.href="search_result.html";

}


