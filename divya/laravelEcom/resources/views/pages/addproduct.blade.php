<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Product</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f9;
            margin: 0;
        }

        .form-container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }

        .form-container h2 {
            text-align: center;
            color: #333;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
        }

        .form-group input[type="text"],
        .form-group input[type="number"],
        .form-group input[type="file"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .submit-button {
            width: 100%;
            background-color: #007BFF;
            color: #ffffff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        .error-message,
        .success-message {
            font-size: 14px;
            margin-bottom: 10px;
            text-align: center;
        }

        .error-message {
            color: #e74c3c;
        }

        .success-message {
            color: #28a745;
        }

        .form-container .alert {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
            padding: 10px;
            border-radius: 4px;
            margin-bottom: 15px;
            font-size: 14px;
        }
    </style>
</head>

<body>

    <div class="form-container">
        <h2>Add Product</h2>

        <!-- Success message section -->
        @if(session('success'))
            <div class="success-message">
                {{ session('success') }}
            </div>
        @endif

        <!-- General error message section -->
        @if($errors->any())
            <div class="alert">
                <strong>There were some errors with your submission:</strong>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('addproduct') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="title">Product Title:</label>
                <input type="text" id="title" name="title" value="{{ old('title') }}" required>
                @error('title')
                    <div class="error-message">{{ $message }}</div>
                @enderror
            </div>

            <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" value="{{ old('category') }}" required>
                @error('category')
                    <div class="error-message">{{ $message }}</div>
                @enderror
            </div>

            <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" id="price" name="price" step="0.01" value="{{ old('price') }}" required>
                @error('price')
                    <div class="error-message">{{ $message }}</div>
                @enderror
            </div>

            <div class="form-group">
                <label for="images">Images:</label>
                <input type="file" id="images" name="images[]" accept="image/*" multiple required>
                @error('images')
                    <div class="error-message">{{ $message }}</div>
                @enderror
                @error('images.*')
                    <div class="error-message">{{ $message }}</div>
                @enderror
            </div>

            <button type="submit" class="submit-button">Add Product</button>
        </form>
    </div>

</body>

</html>