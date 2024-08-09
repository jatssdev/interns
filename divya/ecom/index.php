<?php include 'header.php';
include './conn.php';
$q = "SELECT * FROM products";
$result = mysqli_query($conn, $q);

?>



<h1 class="text-3xl text-center my-4">Newly Arrivals</h1>
<div class="grid grid-cols-12 px-12  gap-4">
    <?php while ($row = mysqli_fetch_assoc($result)) { ?>
        <div class="col-span-3 shadow p-3">
            <img class="w-full h-80" src="<?php echo $row['img'] ?>" alt="">
            <h2 class="my-3"><?php echo $row['title'] ?></h2>
            <h3 class="my-3">₹<?php echo $row['price'] ?></h3>
            <button class="bg-blue-400  text-white w-full py-2">Add To cart</button>
        </div>

    <?php } ?>
</div>

<?php include 'footer.php' ?>