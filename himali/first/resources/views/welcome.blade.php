<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('index.css')}}">
</head>
<?php $name = 'jatin';?>

<body>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <h1>Laravel First Project</h1>
    <div class="wrapper">
        @foreach ($data as $val)
            <h3>Hello {{$val}}</h3>
        @endforeach
    </div>
</body>

</html>