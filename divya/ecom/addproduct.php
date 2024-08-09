<?php include ('header.php'); ?>

<div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Add Product</h2>
    <form method="POST" action="controllers/addproduct.php" enctype="multipart/form-data">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title</label>
            <input type="text" name="title" id="title" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Price</label>
            <input type="number" name="price" id="price" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="img">Product Image</label>
            <input type="text" name="img" id="img" class="w-full p-2 border rounded" required />
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Product
        </button>
    </form>
</div>

<?php include ('footer.php'); ?>