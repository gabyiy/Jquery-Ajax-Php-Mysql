<?php
include"db.inc.php";

$query="select * from emp";

if (mysqli_query($connection,$query)){
echo "merge";
}
?>