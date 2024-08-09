<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Application</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-100">
    <header class="bg-blue-500 p-4">
        <div class="container flex justify-between mx-auto">
            <h1 class="text-white text-3xl">My PHP Application</h1>
            <nav class="mt-2">
                <a href="index.php" class="text-white mr-4">Home</a>
                <?php
                if (isset($_SESSION['name'])) {
                    ?>

                    <a href="controllers/logout.php" class="text-white mr-4">Logout</a>


                <?php } else { ?>
                    <a href="login.php" class="text-white mr-4">Login</a>
                    <a href="register.php" class="text-white mr-4">Register</a>
                <?php } ?>
                <a href="addproduct.php" class="text-white">Add Product</a>
            </nav>
        </div>
    </header>
    <main class="container mx-auto mt-6 min-h-screen">