<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class userController extends Controller
{
    function register(Request $request)
    {

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if ($user) {
            return redirect()->back()->with('msg', 'user registered successfully');
        } else {
            return redirect()->back()->with('msg', 'user register failed');
        }
    }

    function log()
    {
        return view('login');
    }
    function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
    function login(Request $request)
    {
        // $user = User::where('email', $request->email)->first();
        // if ($user) {
        //     if (Hash::check($request->password, $user->password)) {
        //         // your code 
        //     } else {
        //         return redirect()->back()->with('msg', 'password is incorrect');
        //     }
        // } else {
        //     return redirect()->back()->with('msg', 'user not found');
        // }

        $log = Auth::attempt(['email' => $request->email, 'password' => $request->password]);

        if (Auth::check()) {
            return redirect()->route('index');
        } else {
            return redirect()->back()->with('msg', 'invalid credentials');
        }


    }
}
