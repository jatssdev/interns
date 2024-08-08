<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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
    function delete(Request $request)
    {
        User::where('id', $request->id)->delete();
        return redirect()->route('index');
    }
}
