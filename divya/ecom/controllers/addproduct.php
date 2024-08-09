<?php
include '../conn.php';

$title = $_POST['title'];
$price = $_POST['price'];
$img = $_POST['img'];


$q = "INSERT INTO products (title,price,img) VALUES ('$title','$price','$img')";

$result = mysqli_query($conn, $q);
if ($result) {
    header('location:/divya/ecom');
} else {
    echo $result;
}

?>