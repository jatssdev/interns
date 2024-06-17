@extends('layout')


@push('title')

    <title>Edit User Page</title>
@endpush


@section('main-section')
<form action="{{route('user.update', $user->id)}}" method="post">
    @csrf
    @method('PUT')


    <input type="text" value="{{$user->name}}" name="name" id="name">
    <input type="text" value="{{$user->email}}" name="email" id="name">
    <button>Update</button>
</form>

@endsection