@extends('layouts.main')


@section('main')
@if (Auth::check())
    <h3>Hello {{Auth::user()->name}}</h3>
@endif
<h1>Home Page</h1>
<p>Lorem, ipsum dolor.</p>
@endsection