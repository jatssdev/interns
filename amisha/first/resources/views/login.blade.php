@extends('layout.user')

@push('title')
    <title>Register</title>

@endpush
@section('main')

<h3>
    @if (session('error'))
        {{session('error')}}
    @endif
</h3>

<div class="register-container">
    <h2>Register</h2>
    <form action="{{route('user.login')}}" method="post">
        @csrf

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Register</button>
    </form>
</div>
@endsection