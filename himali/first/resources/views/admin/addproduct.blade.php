@extends('layouts.admin')



@section('section')

@if (session('success'))
    <p>{{session('success')}}</p>

@endif
<div class="p-12">
    <form action="{{route('product.store')}}" method="POST" enctype="multipart/form-data">
        @csrf

        <div>
            <input type="text" name="title" placeholder="Title">
        </div>
        <div>
            <input type="text" name="price" placeholder="Price">
        </div>

        <div>
            <select name="category" id="">
                <option value="">Select Category</option>
                @foreach ($categories as $val)

                    <option value="{{$val->name}}">{{$val->name}}</option>
                @endforeach

            </select>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2">
                <label for="img5"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" multiple id="img5">

            </div>

        </div>
        <div><input type="submit" value="Add"></div>
    </form>
</div>
@endsection