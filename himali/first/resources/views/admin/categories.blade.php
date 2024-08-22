@extends('layouts.admin')



@section('section')
<h1>Categories</h1>





@foreach ($categories as $category)
    <p>{{$category->name}}</p>
@endforeach



@endsection