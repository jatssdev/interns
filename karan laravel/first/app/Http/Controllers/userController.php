<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{
    function register(Request $request)
    {


    }
    function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {

            if ($user->password === $request->password) {
                $request->session()->put('user', $user);

                return redirect()->route('user.main')->with('success', 'Login Successfully');
            } else {
                return redirect()->back()->with('error', 'password not match');

            }
        } else {
            return redirect()->back()->with('error', 'user not found');
        }



    }

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

    public function edit($id)
    {
        $user = User::find($id);

        return view('edit', compact('user'));


    }

    public function update(Request $request, $id)
    {


        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,

        ]);

        return redirect()->route('user.main')->with('success', 'user updated successfully.');
    }

}
