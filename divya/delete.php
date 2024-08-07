<?php $id = $_GET['id'];


$conn = mysqli_connect('localhost', 'root', '', 'divya');
$q = "DELETE FROM users WHERE id=$id";
$result = mysqli_query($conn, $q);
header('location:/divya');
?>