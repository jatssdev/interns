@extends('layouts.main')

@push('title')
    <title>Ecommerce - Home</title>
@endpush
@section('section')

@if (session('success'))
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Error!</strong> {{session('success')}}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

@endif

<h1>Laravel First Project</h1>
<div class="wrapper">
    @foreach ($data as $val)
        <h3>Hello {{$val}}</h3>
    @endforeach
</div>
@endsection