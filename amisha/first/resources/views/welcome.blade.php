@extends('layout.user')
@push('title')
    <title>Home</title>

@endpush

@section('main')

<h3>
    @if (session('success'))
        {{session('success')}}
    @endif
</h3>

<h1>Home Page</h1>
@endsection