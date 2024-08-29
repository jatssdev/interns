@extends('layouts.main')

@push('title')
    <title>Ecommerce - Home</title>
@endpush
@section('section')

@if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> {{session('success')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif


<div class="grid grid-cols-12 gap-3 p-5">
    @foreach ($products as $val)
        <div class="col-span-3 shadow p-3">
            <img class="w-full h-[350px]" src="{{asset($val->img)}}" alt="product image">
            <h2>{{$val->title}}</h2>
            <p class="my-2"> Price: {{$val->price}}</p>
            <button class="bg-black text-white px-3 py-1 rounded-sm"> Add To cart</button>
        </div>
    @endforeach
</div>


@endsection