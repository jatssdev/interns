@extends('layout')
@push('title')
    <title>Home Page</title>

@endpush

@section('main-section')


<div class="container my-5">

    <table class="table table-strapped">
        <tr class="bg-dark text-white">
            <th class="text-center" colspan="3">Users Data</th>
        </tr>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>

        @foreach ($users as $val)
            <tr>
                <td>{{$val->name}}</td>
                <td>{{$val->email}}</td>
                <td>
                    <form action="{{route('user.destroy', $val->id)}}" method="POST">
                        @csrf
                        @method('DELETE')
                        <!-- <input type="hidden" name="id" value="{{$val->id}}"> -->
                        <button>Delete</button>
                    </form>
                </td>
            </tr>
        @endforeach
    </table>

</div>




@endsection