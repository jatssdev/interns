<?php

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

$conn = mysqli_connect('localhost', 'root', '', 'divya');
$q = "UPDATE users SET name='$name',email='$email',password='$password' WHERE id = $id";

$result = mysqli_query($conn, $q);
if ($result) {
    header('location:/divya');
} else {
    echo $result;
}

?>