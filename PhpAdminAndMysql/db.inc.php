<!-- ----------------------------------CONEXIUNE PHP---------------------- 

pentru a face conexiune cu php avem nevoie de 3 lucruiri (host user si password)
pentru a desactiva mesajele de erroare de la conexiune punem un @ in fata la mysql_connect -->
<?php
$host="localhost";
$user="root";
$password="";
$db="company";
$connection = @mysqli_connect($host,$user,$password);

if($connection){
    echo "connected <br>";
    if(@mysqli_select_db($connection,$db)){
//
    }
}else{
    echo "not connected";
}
?>