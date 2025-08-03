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
    // $("#sendBtn").click(function(){
    //     console.log('clicked!');
    //     $.ajax({
    //        url:"db/database.txt",
    //        method:"GET",
    //        success:function(response){
    //            console.log('function working test!')
    //            $("#responseTxt").text(response);
    //        }
    //     });
    //
    // });

    // //-------------------part three----------------------
    // $("#sendBtn").click(function(){
    //    $.ajax({
    //       url:"db/database.json",
    //       method:"GET",
    //       success:function(response){
    //           $("#personContainer").empty();
    //           for(let i =0;i<response.length;i++){
    //               const person = response[i];
    //               $("#personContainer").append(
    //                   `<p>Name:${person.name}</p>
    //                    <p>Age:${person.age}</p>
    //                   `
    //               )
    //           }
    //       }
    //    });
    // });

    //------------------part four---------------
    // $("#sendBtn").click(function(){
    //    $.ajax({
    //       url:"db/database.json",
    //       method:"GET",
    //       success:function(response){
    //           response.forEach(function(person){
    //
    //               let row =`<tr>
    //                                 <td>${person.name}</td>
    //                                 <td>${person.age}</td>
    //                               </tr>
    //                               `
    //               $("#tBody").append(row);
    //           });
    //       }
    //    });
    // });
    //-----------------part five------------------
    $("#sendBtn").click(function(){
       $.ajax({
          url:"http://localhost:8080/servletBasics_Web_exploded/customer",
          method:"POST",
          success:function(response){
             for (let i=0;i<response.length;i++){
                 const person = response[i];
                 $("#personContainer").append(
                    `   <p>${person.name}</p>
                        <p>${person.age}</p>
                        <p>${person.address}</p>
                    `
                 )
             }

          }
       });
    });