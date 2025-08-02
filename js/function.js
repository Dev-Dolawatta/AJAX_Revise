$("#sendBtn").click(function(){
    console.log('clicked!');
    var httpObject = new XMLHttpRequest();
    httpObject.open("GET","db/database.txt");//initialize the request
    httpObject.send();//finalize the request

});