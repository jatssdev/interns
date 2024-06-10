@extends('layout')
@push('title')
    <title>Add User</title>

@endpush
@section('main-section')
<form action="{{route('user.add')}}" method="post">
    @csrf
    <input type="text" name="name" id="name">
    <input type="text" name="email" id="name">
    <input type="text" name="pass" id="name">
    <button>Add User</button>
</form>
@endsection