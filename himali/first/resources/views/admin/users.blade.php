@extends('layouts.admin')



@section('section')
<div class="p-12">
    <table class="w-full table-auto">
        <thead>
            <tr class="bg-black text-white">
                <th class="border p-2">Name</th>
                <th class="border p-2">Email</th>
                <th class="border p-2">Action</th>
            </tr>
        </thead>
        <tbody>

            @foreach($users as $user)
                <tr>
                    <td class="border p-2">{{$user->name}}</td>
                    <td class="border p-2">{{$user->email}}</td>
                    <td class="border p-2"><button class="bg-red-400 py-1 rounded-sm px-3">Delete</button> <button
                            class="bg-red-400 py-1 rounded-sm px-3">Edit</button></td>
                </tr>
            @endforeach



        </tbody>
    </table>
</div>
@endsection