@extends('layout.user')

@push('title')
    <title>Register</title>

@endpush
@section('main')

<div class="register-container">
    <h2>Register</h2>
    <form action="{{route('storeuser')}}" method="post">
        @csrf
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Register</button>
    </form>
</div>
@endsection