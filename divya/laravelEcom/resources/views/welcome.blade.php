<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    @if(session('user_name'))
        <h1>Hello {{session('user_name')}}</h1>

    @endif
    <a href="{{route('user.logout')}}">Logout</a>

</body>

</html>