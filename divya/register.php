<?php
include ('header.php');
?>


<section class="home">
    <form action="./registerHandler.php" method="POST">
        <div><input type="text" placeholder="Name" name="name"></div>
        <div><input type="text" placeholder="Eamil" name="email"></div>
        <div><input type="text" placeholder="Password" name="password"></div>
        <div><input type="submit" value="Register"></div>
    </form>
</section>

<?php
include ('footer.php');
?>