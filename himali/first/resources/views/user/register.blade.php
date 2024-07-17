@extends('layouts.main')



@push('title')


    <title>Ecommerce - Register</title>
@endpush

@section('section')
<h1 class="text-center text-3xl my-4">Register</h1>

<form action="{{route('user.register')}}" method="POST" class="border w-2/5 mx-auto p-8 ">
    @csrf
    <div>
        <input class="border w-full p-2 my-2" type="text" name="name" placeholder="Name">
    </div>
    <div>
        <input class="border w-full p-2 my-2" type="text" name="email" placeholder="Email">
    </div>
    <div>
        <input class="border w-full p-2 my-2" type="text" name="password" placeholder="Password">
    </div>
    <div>
        <input class="bg-blue-600 py-2 rounded-sm text-white px-4" type="submit" value="Register">
    </div>
</form>


@endsection