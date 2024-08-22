@extends('layouts.admin')



@section('section')

@if (session('success'))
    <p>{{session('success')}}</p>

@endif
<div class="p-12">
    <form action="{{route('category.store')}}" method="POST">
        @csrf



        <label for="img5">Category</label>

        <input type="text" name="name" id="img5">


        <div><input type="submit" value="Add"></div>
    </form>
</div>
@endsection