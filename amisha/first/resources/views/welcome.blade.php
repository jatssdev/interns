<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="/register">Add User</a>

    <table border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>
                Action
            </th>
        </tr>

        @foreach ($users as $x)
            <tr>
                <td>{{$x->id}}</td>
                <td>{{$x->name}}</td>
                <td>{{$x->email}}</td>
                <td>{{$x->password}}</td>
                <td>
                    <form action="{{route('user.delete')}}" method="post">
                        @csrf
                        <input type="hidden" value="{{$x->id}}" name="id">
                        <button>delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>


</body>

</html>

<!-- php artisan migrate  > for database creation -->
<!-- php artisan make:controller userController  > to create new controller  -->

<!-- make sure to change this things in .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=amisha
DB_USERNAME=root
DB_PASSWORD= -->