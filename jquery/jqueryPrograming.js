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
