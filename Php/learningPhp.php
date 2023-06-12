<?php
//----------------------------------------VARIABLES--------------------------------

// $name ="Gabi"; //string
// $number=1 ;//int
// $boolean= true; //bolean

//----------------------------------------DATA TYPES--------------------------------

// $name ="Gabi"; //string
// $number=1 ;//int
//$float =6.5; //float
// $boolean= true; //bolean
//$array = array("Gabi","Mihai","Alex");//array
//var_dump($number); // asa aflam ce este ce valuare are
//$obj = object{}
//$p=null; 
//$x = function(); //poate fi si o functie

//----------------------------------------CONCATENATION IN  PHP--------------------------------

// $name ="Gabi";

// $age = 30;

// echo $name ." are " .$age;

//----------------------------------------SINGLE QUOTE DOUBLE  QUOTE DIFERENCE IN PHP--------------------------------

// $name ="Gabi";

// $age = 30;

// echo "$name  are $age"; //cu duble quotes se pot folosi variabilie fara sa utilizam concat
// echo $name .' are ' .$age;// aici nu functioneaza

//----------------------------------------ARITMETIC OPERATORS IN PHP--------------------------------

// $x =2;
// $y =5;
// echo $x + $y; //additon
// echo "<br>";
// echo $y - $x; //subtraction
// echo "<br>";
// echo $x * $y; //multiplication
// echo "<br>";
// echo $x /$y; //division
// echo "<br>";
// echo $x % $y; //modulus
// echo "<br>";
// echo $y ** $x//exponential

//----------------------------------------ASIGMENT OPERATORS IN PHP--------------------------------

// $x = 5;
// $y =12;
// $z= $x + $y;
// echo $z;
// echo "<br>";
// $x +=$y; //adaugam la x ce avem la y
// echo $x;
// $x -=$y;
// $x /=$y;
// $x *=$y;
// $x %=$y;
// $x **=$y;

//----------------------------------------COMPARISON OPERATORS IN PHP--------------------------------

//== equal 
// === exact comperison
//!= not equal
//!== no eaqual exact
// >, < , >= ,<= 

//----------------------------------------LOGICAL OPERATORS IN PHP--------------------------------

// |
// || if one is true
// & 
// && both all conditions
// xor if both is true then is true
// ! not

//----------------------------------------INCREMENT  OPERATORS IN PHP--------------------------------

// $x =5;
// $x++;
// echo $x; //adauga un 1
// echo "<br>";
// //echo $x++; mai intai nereturneaza valuare si dupa incrementeaza
// $x--;

//----------------------------------------STRING  OPERATORS IN PHP--------------------------------

// $name ="Jhon";
// $name.=" Hernandez";// asa adaugam alt string la stringu initial

// echo $name;

//----------------------------------------IF IN PHP--------------------------------

// $x=3;
// $y="3";
// if($x==$y){
// echo "yes they have the same values";
// }
// echo "<br>";
// if($x!==$y){
//     echo "no they are not identical";
//     }
    
//----------------------------------------ELSE IN PHP--------------------------------

// $x=3;
// $y=10;
// if($x==$y){
// echo "yes they have the same values";
// }else{
//     echo "they are not the same";
// }

//----------------------------------------ELSE IF IN PHP--------------------------------

// $x=3;
// $y=10;
// if($x>$y){
// echo "yes x is bigger then y";
// }else if($y>$x){
//     echo "y is bigger then x";
// }
//----------------------------------------NESTED IF ELSE IN PHP--------------------------------

// $x=3;
// $y=3;

// if($x==$y){
//     echo "no x and y have the same number <br>";
//     if($x===$y){
//         echo "yes x have the same tipe y";
//     }
// }
// else{
//     echo "x and y have nothing in comun";
// }

//----------------------------------------LOGICAL AND COMPARISON OPERATORS IN PHP--------------------------------


// $num1 = 7;
// $num2 =10;

// if ($num1 >8 && $num2 >8){
//     echo "ambele sunt mai mari decat 8";
// }else if($num1 > 10 && $num2 > 2){
//     echo "ambele sunt mai mare ca 2";
// }else if($num1 >8 || $num2>8){
//     echo "cel putin 1 numar e mai mare ca 8";
// }
//----------------------------------------WHILE LOOP IN PHP--------------------------------

// $x=0;

// while($x<10){
//     echo "x este " .$x ."<br>";
//     $x++;
// }

//----------------------------------------DO WHILE IN PHP--------------------------------

// $x=10;

// do{
//     echo "x este ".$x ."<br>";
//     $x--;
// }while($x>0);

//----------------------------------------FOR LOOP IN PHP--------------------------------

// $x= 10;

// for($i=0;$i<$x;$i+=2){
//     echo "the value of x is " .$i ."<br>";
// }

//----------------------------------------SWITCH STATEMENT IN PHP--------------------------------

// $x=3;

// switch($x){
//     case 10:
//         echo "valuare lui x este 10";
//         break;
//     case 3:
//         echo "valuare lui x este 3";
// break;
//     default:
//     echo "x nu are valuare indicata";
//     break;
// }

//----------------------------------------FUNCTIONS IN PHP--------------------------------

// function test(){
//     echo "ai activat functia";
// }
// test();

//----------------------------------------PARAMETERIZED FUNCTIONS IN PHP--------------------------------

// $x=10;
// $y=20;
// function test2($num1,$num2){

//   echo  $num1 + $num2;
    
// }

// test2($x,$y);

//----------------------------------------RETURN FUNCTIONS IN PHP--------------------------------

// $x=10;
// $y=20;
// function test2($num1,$num2){

//   return  $num1 + $num2;
    
// }

// echo $z = test2($x,$y);

//----------------------------------------INTRODUCTION TO ARRAY AND INDEXES IN PHP--------------------------------

// $arr= array("Gabi","Mihai","Cata");

// print_r($arr);
// echo "<br>";
// echo $arr[1];

//----------------------------------------ASSOCITATIVE ARRAY IN PHP--------------------------------

// $arr1= array("Name"=>"Alex","Age"=>25,"Phone"=>65555); //asta este un array associativ
// //print_r($arr1);
// echo $arr1["Name"];

//---------------------------------------MULTI DIMENSIONAL  ARRAY IN PHP--------------------------------

// $arr1= array("Name"=>"Alex","Age"=>25,"Phone"=>array("Landline"=>65555,"Mobile"=>array(7558955)));//asa adaugam un array in alt array

// echo $arr1["Phone"]["Mobile"][0];// si asa accesam al doilea numar din array

// echo"<pre>",print_r($arr1),"<pre>";
?>


