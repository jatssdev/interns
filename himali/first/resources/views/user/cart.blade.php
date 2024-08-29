@extends('layouts.main')

@push('title')
    <title>Ecommerce - Cart</title>
@endpush
@section('section')

@if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> {{session('success')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

@if (session('error'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {{session('error')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif



<div class="grid grid-cols-12 gap-3 p-5">
    @foreach ($products as $val)
        <div class="col-span-3 shadow p-3">
            <img class="w-full h-[350px]" src="{{asset($val->img)}}" alt="product image">
            <h2>{{$val->title}}</h2>
            <p class="my-2"> Price: {{$val->price}}</p>
            <form action="/addtocart" method="POST">
                @csrf
                <input type="hidden" value="{{$val->id}}" name="productid">
                <input type="text" value="{{$val->quantity}}" name="quantity">
                <button class="bg-black text-white px-3 py-1 rounded-sm"> Add To cart</button>
            </form>
        </div>
    @endforeach
</div>


@endsection