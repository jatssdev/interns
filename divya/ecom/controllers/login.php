<?php
include '../conn.php';
session_start();

$email = $_POST['email'];
$password = $_POST['password'];


$q = "SELECT * FROM users WHERE email='$email'";

$result = mysqli_query($conn, $q);
$user = mysqli_fetch_assoc($result);

if ($user) {
    if ($password == $user['password']) {

        $_SESSION['name'] = $user['name'];
        $_SESSION['eamil'] = $user['eamil'];
        $_SESSION['password'] = $user['name'];

        header('location:/divya/ecom');

    } else {
        echo 'invalid password';
    }
} else {
    echo 'user not found!';
}


?>