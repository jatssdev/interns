<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\User;
use Illuminate\Http\Request;

class adminController extends Controller
{
    function users()
    {
        $users = User::all();

        return view('admin.users', compact('users'));

    }
    function addpproduct()
    {
        return view('admin.addproduct');


    }

    function storepproduct(Request $request)
    {

        product::create([
            'title' => $request->title,
            'price' => $request->price,
            'img' => $request->img,
            'category' => $request->category,

        ]);
        return redirect()->back()->with('success', 'product addded');



    }
}
