<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* Navbar styling */
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #333;
            padding: 1rem;
        }

        .navbar-logo {
            font-size: 1.5rem;
            color: #fff;
            text-decoration: none;
        }

        .navbar-links {
            align-items: center;
            display: flex;
            gap: 1rem;
        }

        .navbar-links a {
            color: #fff;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: background 0.3s;
        }

        .navbar-links a:hover {
            background-color: #555;
            border-radius: 5px;
        }

        /* Responsive styling */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                align-items: flex-start;
            }

            .navbar-links {
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            .navbar-links a {
                padding: 0.5rem 0;
            }
        }

        .navbar .auth {
            display: flex;
            align-items: center;

        }

        .navbar .profile img {
            border-radius: 50%;
            height: 30px;
            width: 30px;
        }
    </style>
</head>

<body>

    <nav class="navbar">
        <a href="/" class="navbar-logo">MyLogo</a>



        <div class="navbar-links">

            <a href="/">Home</a>
            <a href="addproduct">Add Product</a>
            @if (@session('user_id'))



                <div class="profile">
                    <img src=" {{session('profile')}}" alt="">

                </div>
                <a href="logout">Logout</a>
            @else
                <div class="auth">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>

            @endif
        </div>
    </nav>
    @yield('mainSection')

</body>

</html>