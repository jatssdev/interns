<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <h1>Register</h1>

    <form method="post" action="{{route('user.store')}}" enctype="multipart/form-data">
        @csrf

        <div><input type="file" name="profile"></div>
        <div><input type="text" placeholder="name" name="name"></div>
        <div><input type="text" placeholder="email" name="email"></div>
        <div><input type="text" placeholder="password" name="password"></div>
        <button>Submit</button>
    </form>
</body>

</html>