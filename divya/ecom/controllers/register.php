<?php
include '../conn.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];


$q = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$password')";

$result = mysqli_query($conn, $q);
if ($result) {
    header('location:/divya/ecom');
} else {
    echo $result;
}

?>