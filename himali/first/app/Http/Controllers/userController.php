<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class userController extends Controller
{
    function register(Request $request)
    {
        $existing = User::where('email', $request->email)->first();

        if ($existing) {
            return redirect()->back()->with('error', 'user already exists');
        } else {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            return redirect()->route('index')->with('success', 'User Register Successfully!');
        }

    }
    function login(Request $request)
    {
        $login = Auth::attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);



        if ($login) {

            return redirect()->route('index')->with('success', 'User Login Successfully!');

        } else {
            return redirect()->back()->with('error', 'user not found');
        }





    }
    function search(Request $request)
    {
        $query = $request->input('query');
        $products = product::where('title', 'LIKE', "%$query%")->orWhere('price', 'LIKE', "%$query%")->get();
        return view('user.search', compact('products'));
    }
}
