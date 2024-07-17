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
    {{view('user.header')}}
    @yield('section')

</body>

</html>