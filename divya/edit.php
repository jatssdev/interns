<?php
include ('header.php');
$conn = mysqli_connect('localhost', 'root', '', 'divya');

$id = $_POST['id'];
$q = "SELECT * FROM users WHERE id = $id";
$result = mysqli_query($conn, $q);

$row = mysqli_fetch_assoc($result);


?>


<section class="home">
    <form action="./editHandler.php" method="POST">
        <div><input value="<?php echo $row['id'] ?>" type="hidden" placeholder="Name" name="id"></div>
        <div><input value="<?php echo $row['name'] ?>" type="text" placeholder="Name" name="name"></div>
        <div><input value="<?php echo $row['email'] ?>" type="text" placeholder="Eamil" name="email"></div>
        <div><input value="<?php echo $row['password'] ?>" type="text" placeholder="Password" name="password"></div>
        <div><input type="submit" value="Submit"></div>
    </form>
</section>

<?php
include ('footer.php');
?>