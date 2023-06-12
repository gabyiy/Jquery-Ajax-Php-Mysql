<?php
include"db.inc.php";

$id=1;

$query = "select name from emp where emp_id='$id'";

$query_run= mysqli_query($connection,$query);

if(mysqli_num_rows($query_run)>0){
    while($rows=mysqli_fetch_assoc($query_run)){
        echo "salut".$rows["name"];
    }
}
?>