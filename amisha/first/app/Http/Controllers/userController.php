<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class userController extends Controller
{
    function index()
    {
        $users = User::all();


        return view('welcome', compact('users'));


    }
    function register(Request $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        return redirect()->route('index');
    }
    function login(Request $request)
    {
        $user = Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ]);

        if ($user) {
            return redirect()->route('index')->with('success', 'login success');
        } else {
            return redirect()->back()->with('error', 'login failed');
        }
    }
    function delete(Request $request)
    {
        User::where('id', $request->id)->delete();
        return redirect()->route('index');
    }
    function logout(Request $request)
    {
        Auth::logout();
        if (Auth::check()) {
            return redirect()->back()->with('error', 'logout failed');
        } else {
            return redirect()->route('login')->with('success', 'user logout success');
        }
    }
}
