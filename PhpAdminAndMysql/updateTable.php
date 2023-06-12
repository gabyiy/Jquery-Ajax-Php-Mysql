<?php
include"db.inc.php";

$updateName= "Schmbat nume Gabi";

$query = "update emp set name='$updateName' where name='Gabi'";


if(@mysqli_query($connection,$query)){
    echo "name changed";
}
?>