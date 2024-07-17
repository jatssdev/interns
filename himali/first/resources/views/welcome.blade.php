@extends('layouts.main')

@push('title')
    <title>Ecommerce - Home</title>
@endpush
@section('section')

<h1>Laravel First Project</h1>
<div class="wrapper">
    @foreach ($data as $val)
        <h3>Hello {{$val}}</h3>
    @endforeach
</div>
@endsection