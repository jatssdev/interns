<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{

    public function index()
    {
        $users = User::all();

        return view('welcome', compact('users'));
    }
    public function add(Request $request)
    {

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->pass
        ]);
        return redirect()->route('user.main')->with('success', 'Todo Added Successfully');
    }


    public function destroy($id)
    {
        $user = User::find($id);

        $user->delete();

        return redirect()->route('user.main')->with('success', 'user Deleted Successfully');


    }

}
