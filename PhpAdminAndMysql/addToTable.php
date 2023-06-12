<?php
include"db.inc.php";

$emp_id=NULL;
$name="George";
$phone=12345;

$query= "insert into emp values ('$emp_id','$name', '$phone')";

if(@mysqli_query($connection,$query)){
echo "yes";
}

?>