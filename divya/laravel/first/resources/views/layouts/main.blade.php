<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <a href="/">Home</a>
    <a href="/about">About</a>
    @if(Auth::check())
        <a href="/logout">Logout</a>


    @else
        <a href="/register">Register</a>
        <a href="/login">Login</a>
    @endif





    @yield('main')

</body>

</html>