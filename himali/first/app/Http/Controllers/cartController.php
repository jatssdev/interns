<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\product;
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
                ->select('products.*', 'carts.quantity', 'carts.id as cartid')
                ->where('carts.userid', $id)
                ->get();
            $total = $products->sum(function ($cart) {
                return $cart->price * $cart->quantity;
            });

            return view('user.cart', compact('products', 'total'));
        } else {
            return redirect()->back()->with('error', 'user should be login first');
        }
    }

    function remove(Request $request)
    {
        $id = Auth::user()->id;
        $productid = $request->input('productid');
        $product = cart::find($productid);
        $product->delete();
        return redirect()->back()->with('success', 'product deleted successfully');

        // $product = cart::where('productid', $productid)->where('userid', $id)->first();


    }
    function qtyinc(Request $request)
    {
        $cartid = $request->input('cartid');
        $product = cart::find($cartid);
        $product->quantity++;
        $product->save();
        return redirect()->back();
    }
    function qtydec(Request $request)
    {
        $cartid = $request->input('cartid');
        $product = cart::find($cartid);
        $product->quantity--;
        $product->save();
        return redirect()->back();

    }
}
