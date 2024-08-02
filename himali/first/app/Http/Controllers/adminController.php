<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        $imagesPaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $img) {
                $path = $img->store('public/images/products');
                $imagesPaths[] = Storage::url($path); // run this command to configure storage : php artisan storage:link
            }

            $prouct = new product();
            $prouct->title = $request->input('title');
            $prouct->price = $request->input('price');
            $prouct->category = $request->input('category');
            $prouct->img = $imagesPaths[0] ?? null;
            $prouct->img2 = $imagesPaths[1] ?? null;
            $prouct->img3 = $imagesPaths[2] ?? null;
            $prouct->img4 = $imagesPaths[3] ?? null;
            $prouct->img5 = $imagesPaths[4] ?? null;
            $prouct->save();
            return redirect()->back()->with('success', 'product added successfully');
        }
        // product::create([
        //     'title' => $request->title,
        //     'price' => $request->price,
        //     'img' => $request->img,
        //     'category' => $request->category,
        // ]);
        return redirect()->back()->with('success', 'product addded');



    }
}
