<?php
include ('header.php');
$conn = mysqli_connect('localhost', 'root', '', 'divya');

$q = "SELECT * FROM users";

$result = mysqli_query($conn, $q);

?>


<section class="home">
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
        <?php while ($row = mysqli_fetch_assoc($result)) { ?>

            <tr>
                <td><?php echo $row['name'] ?></td>
                <td><?php echo $row['email'] ?></td>
                <td><a href="delete.php?id=<?php echo $row['id'] ?>">Delete</a></td>
                <td>
                    <form action="edit.php" method="POST">
                        <input type="hidden" value="<?php echo $row['id'] ?>" name="id">
                        <button>Edit</button>
                    </form>
                </td>
            </tr>


        <?php } ?>  
    </table>
</section>

<?php
include ('footer.php');
?>