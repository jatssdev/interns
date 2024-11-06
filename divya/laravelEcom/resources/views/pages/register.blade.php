@extends('layout')


@section('mainSection')
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<style>
    /* Main container styling */
    .container {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f8f9fa;
    }

    /* Centered content section */
    main {
        width: 100%;
        max-width: 450px;
        background-color: #fff;
        padding: 2rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    /* Error message styling */
    .alert.alert-danger {
        background-color: #ffdddd;
        border-left: 4px solid #f44336;
        color: #d8000c;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 5px;
    }

    .alert.alert-danger ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .alert.alert-danger li {
        margin: 0.5rem 0;
    }

    /* Heading styling */
    h1 {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 1.5rem;
        text-align: center;
    }

    /* Form styling */
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    /* Input fields */
    form input[type="text"],
    form input[type="file"],
    form input[type="password"] {
        width: 100%;
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        transition: border-color 0.3s;
    }

    form input[type="text"]:focus,
    form input[type="file"]:focus,
    form input[type="password"]:focus {
        border-color: #66afe9;
        outline: none;
    }

    /* Submit button */
    form button {
        padding: 0.8rem;
        font-size: 1rem;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    form button:hover {
        background-color: #0056b3;
    }

    /* File input styling */
    form input[type="file"] {
        padding: 0.5rem;
        font-size: 0.9rem;
        border: 1px solid #ccc;
        cursor: pointer;
    }
</style>
<h1>Register</h1>

<div class="container">
    <form method="post" action="{{route('user.store')}}" enctype="multipart/form-data">
        @csrf

        <div><input type="file" name="profile"></div>
        <div><input type="text" placeholder="name" name="name"></div>
        <div><input type="text" placeholder="email" name="email"></div>
        <div><input type="text" placeholder="password" name="password"></div>
        <button>Submit</button>
    </form>

</div>
@endsection