<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @stack('title')
    <link rel="stylesheet" href="{{asset('index.css')}}">
    <script src="https://cdn.tailwindcss.com"></script>

</head>

<body>

    <div class="flex h-screen">
        <div class="w-1/5 h-full bg-red-300">
            <a class="border-b block p-2" href="/admin">
                <p class="">Dashboard</p>
            </a>
            <a class="border-b block p-2" href="{{route('product.add')}}">
                <p class="">Add Product</p>
            </a>
            <a class="border-b block p-2" href="{{route('category.add')}}">
                <p class="">Add Category</p>
            </a>
            <a class="border-b block p-2" href="{{route('admin.products')}}">
                <p class="">Products</p>
            </a>
            <a class="border-b block p-2" href="/admin/users">
                <p class="">Users</p>
            </a>
            <a class="border-b block p-2" href="/admin/categories">
                <p class="">Categories</p>
            </a>
        </div>
        <div class="w-4/5 h-full">
            @yield('section')
        </div>
    </div>



</body>

</html>