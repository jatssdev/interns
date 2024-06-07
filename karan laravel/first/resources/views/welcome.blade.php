@extends('layout')
@push('title')
    <title>Home Page</title>

@endpush

@section('main-section')
<h1>Hello home</h1>
<form action="{{route('user.add')}}" method="post">
    @csrf
    <input type="text" name="name" id="name">
    <input type="text" name="email" id="name">
    <input type="text" name="pass" id="name">
    <button>Add User</button>
</form>
@endsection