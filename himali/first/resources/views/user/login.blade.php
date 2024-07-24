@extends('layouts.main')

@push('title')
    <title>Ecommerce - Login</title>
@endpush
@section('section')
@if (session('error'))
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">{{session('error')}}</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Close</title>
                <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </span>
    </div>
@endif
<h1 class="text-center text-3xl my-4">Login</h1>

<form action="{{route('user.login')}}" method="POST" class="border w-2/5 mx-auto p-8 ">
    @csrf

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