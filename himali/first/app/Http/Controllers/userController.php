<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    function register(Request $request)
    {
        $existing = User::where('email', $request->email);
        if ($existing) {
            return redirect()->back()->with('error', 'user already exists');
        } else {
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);

            return redirect()->route('index')->with('success', 'User Register Successfully!');
        }




    }
}
