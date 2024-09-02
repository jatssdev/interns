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
    <div class="col-span-7">
        @foreach ($products as $val)
            <div class="flex gap-6 shadow p-3">
                <img class="w-[100px] h-[100px]" src="{{asset($val->img)}}" alt="product image">
                <h2 class="w-[40%]">{{$val->title}}</h2>
                <p class="my-2 "> Price: {{$val->price * $val->quantity}}</p>
                <div class="">
                    <form action="{{route('cart.inc')}}" method="POST">
                        @csrf
                        <input type="hidden" value="{{$val->cartid}}" name="cartid">
                        <button>+</button>
                    </form>
                    <div>
                        {{$val->quantity}}
                    </div>
                    <form action="{{route('cart.dec')}}" method="POST">
                        @csrf
                        <input type="hidden" value="{{$val->cartid}}" name="cartid">

                        <button>-</button>
                    </form>

                </div>
                <form action="/removefromcart" method="POST">
                    @csrf
                    <input type="hidden" value="{{$val->cartid}}" name="productid">
                    <button class="bg-black text-white px-3 py-1 rounded-sm"> remove</button>
                </form>
            </div>
        @endforeach
    </div>
    <div class="col-span-5">
        <h3>Total : <span>{{$total}}</span></h3>
        <button class="w-full bg-black text-white py-2 rounded-md my-3">Checkout</button>
    </div>
</div>


@endsection