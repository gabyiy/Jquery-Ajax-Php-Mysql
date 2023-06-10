// ---------------------------------------------JQUERY SINTAX---------------------------------------

// $("p").click(function(){
//     $(this).hide(5000);
// });

// // $ este folosit pentru a utiliza jquery
// // p este selectoru
// // this insemna ca ne referimi la p respectiv

// --------------------------------------JQUERY SELECTORS-------------------------------------------

//  $("h1").click(function(){
//     $(this).hide(5000);
//  });

//  $(".hideClass").click(function(){
//     $(this).hide()
//  })

//  $("#hideId").click(function(){
//     $(this).hide(1000)
//  })


 //avem mai multe selectori (clasa, h1 , id )

//  ------------------------------------MOUSE EVENTS IN JQUERY---------------------------------------

// $("p").click(function(){
//     alert("this paragraph got click")
// })
// $("h1").dblclick(function(){
//     alert("this paragraph has been clicked twice")
// })

// $("h2").mouseenter(function(){
//     alert("mouse enter")
// })

// $("h3").mouseleave(function(){
//     alert("mouse left")
// })


//  ------------------------------------KEYBOARD EVENTS IN JQUERY---------------------------------------

//asa aflam valoarea introdusa

// $(".keyPress").keypress(function(){
//     alert($(this).val())
// })

//asa trimitem valuarea de forma dinamica in html

// $(".input").keypress(function(){
//     $(".output").html($(".input").val())
// })

// $(".input").keydown(function(){
//     $(".output").html($(".input").val())
// })

// $(".input").keyup(function(){
//     $(".output").html($(".input").val())
// })


//  -----------------------------------FORM EVENTS IN JQUERY---------------------------------------

//este folosit cand facem click in input

// $(".input").focus(function(){

//    $(this).css("background-color","red")
// })


//este folosit cand dam click inafara inputului

// $(".input").blur(function(){

//     $(this).css("background-color","blue")
// })

// $(".input").change(function(){

// alert("ai adaugat ceva in input si ai iesit din focus input")
// })

// //si asa facem submit la un formular
// $("form").submit(function(){
// alert("form submited")
// })

//  -----------------------------------WINDOW EVENTS IN JQUERY---------------------------------------

//functia on ,care atunci cand deschidem pagina ne arata ce dorim, aceasta are 2 parametri (load= adica 
//atunci cand se incarca si al doilea este functia)

//  $(window).on("load",function(){
//     $("body").css("height","2000px")
//     alert("window")
//  })
// $(window).on("unload",function(){
//     alert("activat la unload")
// })
// $(window).on("scroll",function(){
//     alert("ai facut scroll")
// })

// $(window).on("resize",function(){
//     alert("i-m resizing")
// })

//  -----------------------------------HIDE AND SHOW IN JQUERY---------------------------------------


// $("input").change(function(){
//     var num = $(this).val()
//     $(window).on("load",function(){
//         $("p.hide").hide()
//     })
//     if($("input").val()<10){
//         $("p").html("ai introdus numar" + num)
//         $("p.show").show(1000)
//         $("p.hide").hide()
//     }else if ($("input").val()>10){
//         $("p").html("ai introdus un numar mai mare ca 10, mai exact" + $("input").val())
//         $(window).on("unload",function(){
//             $("p.hide").hide()
//             $("p.show").show(1000)
//         })
//     }
// })

// ------------------------------------------  HOW TO GET HTML CONTENT IN JQUERY-----------------------------


// alert($("p:first-child").html())
// alert($("p:nth-child(2)").text())

// //asa luam scoate valoare care o introducem la placeholder ,sau de la src de exeplu
// alert($("#name").attr("placeholder"))

//  -----------------------------------SETTING CONTENT  IN JQUERY---------------------------------------

//folosim acelasi model ca la get html content
// .val() scoate valuare care este introdusa intrun input
// $("html").click(function(){
// $("p:first-child").html("first child")
// $("p:nth-child(2)").html("second child")
// $("#name").attr("placeholder","just changed placeholder name")
// })

//  -----------------------------------CREATING HTML CONTENT  IN JQUERY---------------------------------------

// var content1 = "<p class('content1')>am creat content< folosind html/p>"
// var content2 = $("<p class='content2'></p>").text("am creat content folosind jquery")
// var content3 = document.createElement("p")

//  -----------------------------------ADDING HTML CONTENT  IN JQUERY---------------------------------------

// var content1 = "<p class='content1'>am creat content folosind html</p>"
// var content2 = $("<p class='content2'></p>").text("am adaugat mai adaugat text folosind jquery")
// var content3 = document.createElement("p")

// =====>>>         cu append practic facem ca content1 si 2 sa fie childrens la body
// 
//$("body").append(content1,content2)

// $(".content2").append("<b>Am adaugat content in fata</b>")
// $(".content2").prepend("<b>Am adaugat content in spate</b>")

// =====>>>>                in schimb cu before si after este creat ca un nou element si nu ca un child

// $(".content1").before("<h1>Am adaugat content inainte</h1>")
// $(".content1").after("<h1>Am adaugat content inainte</h1>")

//  -----------------------------------REMOVING HTML CONTENT  IN JQUERY---------------------------------------

//====>>>>>>>>   cu empty golim ce avem in div
// $(".div2").empty()

// //==========>>>>>>>>>> cu remove stergemn tot divu
// //$(".div2").remove()

// $(".div2").append('<p><b>Am creat un paragraph bold</b></p>')


//  -----------------------------------TRAVERSING ANCESTOR IN JQUERY---------------------------------------


//=====================>>> asa accesam parintele , si cu parinti afectam toti parinti

// $(".last-div").parent().css("background-color","red")
//$(".last-div").parentsUntil("body").css("background-color","red")
// $(".last-div").parents().css("background-color","red")

//  -----------------------------------DESCENDANT ANCESTOR IN JQUERY---------------------------------------


//========>>>>>>> asignam culuare la toti copii de primu grad nu si cei aflat in interioru copiilor (nepoti si stranepoti)
// $(".outer").children().css("background-color","blue")

// $(".outer").find("p").css("background-color","red")

//  -----------------------------------SIBLING TRAVERSAL  IN JQUERY---------------------------------------

// $("h1").siblings().css("background-color","red")

// ====>>>>> asa selectionam toti frati mai putin h1
//$(".inner h1").siblings().css("background-color","red")

// ======>>>>>>>> asa accesam urmatoru h1 care este frate cu divu cu clasa last-div, iar cu all accesam toate
//elementele h1 
// $(".last-div h1").next().css("background-color","red")
// $(".last-div h1").nextUntil(".midlle").css("background-color","red")


// $(".last-div h1").prev().css("background-color","red")
// $(".last-div h1").prevUntil(".middle").css("background-color","red")
// $(".last-div h1").prevAll().css("background-color","red")

//  -----------------------------------JQUERY  AJAX : LOAD METHOD P1---------------------------------------


//=======================>>>>>>>>>>>asa incarcam ca avem intrun fisier exterm
//$(".load").load("/syntax.html")

// $(".but").on("click",function () { 
// $(".load").load("/syntax.html")
//  })

//=======================>>>>>>>>>>> asa incarcam doar ceva specific cum ar fi id (cotine 3 argumente,
// 1 este url al doile este data si un calback  )
// $(".but").click(function () { 
// $(".load").load("/syntax.html #para1",function(response,status,xhr){
//     if (status=="success"){
// $(".status").html("<p class='success'><b>Action performed succesufuly</b></p>")
//     }
//     if(status=="error"){
//         $(".status").html("Action failed")
//     }
// })
//  })

//  -----------------------------------JQUERY  AJAX : GET HTTP REQUEST P1---------------------------------------

//asa ffacem un request ( prim parametru este unde , al doile este ce trimtem si dupa functi)
        // $("#but").click(function () { 
        //     var name = $("#name").val()
        //     $.get('get-request.php',{name:name},function(response,status,xhr){
        //         $(".transfer").text(response)
              
        //     }
            
        //     )

        //  })
//  -----------------------------------JQUERY  AJAX : POST HTTP REQUEST P3---------------------------------------

        // $("#but").click(function () { 
        //     var name = $("#name").val()
        //     $.post('post-request.php',{name:name},function(response,status,xhr){
        //         $(".transfer").text(response)
              
        //     }   
        //     )
        //  })

        //  -----------------------------------JQUERY  $.ajax---------------------------------------

        //in url spunem unde trimite requestu, in al doilea spune min caz ca este success sa aplice functia
        // data fiind raspunsu si cu data trimite numele la php
// $("#but").click(function () {

//     var name = $("#name").val()
//     $.ajax({
//         //putem predefin type ( daca nu adaugam type ramne get)
//         type:"POST",
//         url:"get-request.php",
//         data:"name=" + name,
//         success:function (response) { 
//             $(".response").html(response)
//          }
//     })
//   })


        //  -----------------------------------USING EACH METHOD IN JQUERY ---------------------------------------

// $("#but").click(function(){
//     $("p").each( function (indexInArray, valueOfElement) { 
//          $("body").append("lol<br>")

//          $(this).html("am schimbat textu din p cu referindule la el cu this")
//     });
// })
   
        //  -----------------------------------CSS MANIPULATION ADDING CLASSES JQUERY ---------------------------------------

//      $("#but").click(function () {
// //se paote adauga clasa direct in element
//       $("body").append("<h1 class='gg'>gg</h1>")
//       $("h1").css("background-color","green")

//      })
//      //sau asa
//     // $(".gg").addClass("red")


//           //  -----------------------------------CSS MANIPULATION REMOVING CLASSES JQUERY ---------------------------------------

//           $("#remove").click(function () {
//             $("h1").removeClass("background-color","green")
//               })

        //  -----------------------------------CSS MANIPULATION ADDING CSS STYLE DINAMICALLY JQUERY ---------------------------------------

        // $("#but").click(function () {
        //     //se paote adauga clasa direct in element
        //           $("body").append("<p class='gg'><b>gg</b></p>")
        //         //  $("p").css("color","green" )
            
        //         //ca sa adaugam mai multe proprietati facem un obiect
        //         $("p").css({"font-size":"40px", "color":"red"})
        //          })


 //  -----------------------------------CSS MANIPULATION TOGLE CLASS JQUERY ---------------------------------------


//  $("#toggle").click(function(){
//     $("p").toggleClass("red")
//  })