<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class productController extends Controller
{
    function addshow()
    {
        return view('pages.addproduct');
    }

    function showproduct()
    {
        $products = Product::all();
        return view('pages.showproduct', compact('products'));
    }


    public function storeproduct(Request $request)
    {
        // Validate incoming data
        $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'category' => 'required|string|max:255',
            'images' => 'required|array',

        ]);



        // Gather form data
        $title = $request->title;
        $price = $request->price;
        $category = $request->category;

        // Handle images
        $imagePaths = [];
        if ($request->hasfile('images')) {
            foreach ($request->file('images') as $image) {
                // Store the image in the 'public/products' directory
                $path = $image->store('products', 'public');
                $imagePaths[] = $path;
            }
        }

        // Create and save the product
        $product = new Product();
        $product->title = $title;
        $product->price = $price;
        $product->category = $category;
        $product->images = json_encode($imagePaths); // Store image paths as JSON array

        // Save product to the database and check for success
        if ($product->save()) {
            return redirect()->back()->with('success', 'Product added successfully!');
        } else {
            return redirect()->route('showproduct')->withErrors(['error' => 'Failed to save product to the database.']);
        }
    }


}
