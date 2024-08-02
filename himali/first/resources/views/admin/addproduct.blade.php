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
                <option value="earbuds">Earbuds</option>
                <option value="tshirts">Tshirts</option>
                <option value="shoes">Shoes</option>
            </select>
        </div>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-2">
                <label for="img5"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" id="img5">

            </div>
            <div class="col-span-2">
                <label for="img1"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" id="img1">

            </div>
            <div class="col-span-2">
                <label for="img2"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" id="img2">

            </div>
            <div class="col-span-2">
                <label for="img3"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" id="img3">

            </div>
            <div class="col-span-2">
                <label for="img4"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s"
                        class="w-full" alt=""></label>

                <input type="file" name="images[]" id="img4">

            </div>
        </div>
        <div><input type="submit" value="Add"></div>
    </form>
</div>
@endsection