@extends('layouts.admin')



@section('section')

@if (session('success'))
    <p>{{session('success')}}</p>

@endif
<div class="p-12">
    <form action="{{route('product.store')}}" method="POST">
        @csrf
        <div>
            <input type="text" name="img" placeholder="Image">
        </div>
        <div>
            <input type="text" name="title" placeholder="Title">
        </div>
        <div>
            <input type="text" name="price" placeholder="Price">
        </div>

        <div>
            <select name="category" id="">
                <option value="">Select Category</option>
                <option value="earbuds">Earbuds</option>
                <option value="tshirts">Tshirts</option>
                <option value="shoes">Shoes</option>
            </select>
        </div>
        <div><input type="submit" value="Add"></div>
    </form>
</div>
@endsection