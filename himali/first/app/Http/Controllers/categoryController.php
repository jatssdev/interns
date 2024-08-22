<?php

namespace App\Http\Controllers;

use App\Models\categoryModel;
use Illuminate\Http\Request;

class categoryController extends Controller
{
    function store(Request $request)
    {

        $category = categoryModel::create([
            'name' => $request->name,
        ]);

        return redirect()->back()->with('success', 'new category added');

    }
    function showcategorypage()
    {


        return view('admin.addcategory');

    }
    function categories()
    {

        $categories = categoryModel::all();
        return view('admin.categories', compact('categories'));

    }
}
