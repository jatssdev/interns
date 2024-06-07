<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    public function add(Request $request)
    {

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->pass

        ]);

        return redirect()->route('user.main')->with('success', 'Todo Added Successfully');


    }
}
