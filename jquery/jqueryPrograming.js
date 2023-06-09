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

var content1 = "<p class='content1'>am creat content< folosind html</p>"
var content2 = $("<p class='content2'></p>").text("am creat content folosind jquery")
var content3 = document.createElement("p")

$("body").append(content1,content2)


$(".content2").append("<b>Am adaugat content in fata</b>")
(".content2").before("<h1>Am adaugat content inainte</h1>")
$(".content2").after("<h1>Am adaugat content inainte</h1>")
$(".content2").prepend("<b>Am adaugat content in spate</b>")
