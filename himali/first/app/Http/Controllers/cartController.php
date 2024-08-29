<?php

namespace App\Http\Controllers;

use App\Models\cart;
use Auth;
use DB;
use Illuminate\Http\Request;

class cartController extends Controller
{
    function addtocart(Request $request)
    {
        if (Auth::check()) {
            $user_id = Auth::user()->id;
            $product_id = $request->input('productid');
            $quantity = $request->input('quantity');

            $existing = cart::where('productid', $product_id)->first();
            if ($existing) {
                $existing->quantity = $existing->quantity + $quantity;
                $existing->save();
                return redirect()->back()->with('success', 'This Item Is Alreaady Exists');
            } else {
                $cart = cart::create([
                    'userid' => $user_id,
                    'productid' => $product_id,
                    'quantity' => $quantity
                ]);
                return redirect()->back()->with('success', 'item added to cart');
            }
        } else {
            return redirect()->back()->with('error', 'user should be login first');
        }

    }
    function index()
    {
        if (Auth::check()) {


            $id = Auth::user()->id;
            $products = DB::table('carts')
                ->join('products', 'carts.productid', '=', 'products.id')
                ->select('products.*', 'carts.quantity')
                ->where('carts.userid', $id)
                ->get();

            return view('user.cart', compact('products'));
        } else {
            return redirect()->back()->with('error', 'user should be login first');
        }
    }

    function remove()
    {
        $id = Auth::user()->id;

        

    }
}
