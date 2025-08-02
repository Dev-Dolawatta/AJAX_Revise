//----------------part one-------------------
    // $("#sendBtn").click(function(){
    //     console.log('clicked!');
    // var httpObject = new XMLHttpRequest();
    // console.log(httpObject.readyState)
    // httpObject.open("GET","db/database.txt");//initialize the request
    // console.log(httpObject.readyState)
    // httpObject.send();//finalize the request
    // console.log(httpObject.readyState)

    //----------------part two-----------------------
    $("#sendBtn").click(function(){
        console.log('clicked!');
        $.ajax({
           url:"db/database.txt",
           method:"GET",
           success:function(response){
               console.log('function working test!')
               $("#responseTxt").text(response);
           }
        });

});