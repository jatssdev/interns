<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .product-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        .product-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-card img {
            max-width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product-card .content {
            padding: 15px;
        }

        .product-card h3 {
            font-size: 1.2rem;
            margin: 0 0 10px;
            color: #333;
        }

        .product-card p {
            font-size: 1rem;
            margin: 0;
            color: #555;
        }

        .product-card .price {
            font-size: 1.1rem;
            font-weight: bold;
            color: #007BFF;
            margin-top: 10px;
        }

        .product-card .images {
            display: flex;
            gap: 5px;
        }

        .product-card .images img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
    </style>
</head>

<body>

    <div class="container">
        <h1>Product List</h1>

        <div class="product-grid">
            @foreach($products as $product)
                <div class="product-card">
                    <!-- Display main image -->
                    <img src="{{ asset('storage/' . json_decode($product->images)[0]) }}"
                        alt="{{json_decode($product->images)[0]}}">

                    <div class="content">
                        <h3>{{ $product->title }}</h3>
                        <p>Category: {{ $product->category }}</p>
                        <p class="price">${{ number_format($product->price, 2) }}</p>

                        <!-- Display other images -->
                        <div class="images">
                            @foreach(json_decode($product->images) as $image)
                                <img src="{{ asset('storage/' . $image) }}" alt="{{ $product->title }}">
                            @endforeach
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</body>

</html>