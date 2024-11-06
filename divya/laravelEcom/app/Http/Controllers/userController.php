<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class userController extends Controller
{
    function register(Request $request)
    {
        return view('pages.register');

    }
    function store(Request $request)
    {
        $avatarUrl = null;
        if ($request->hasFile('profile')) {
            $avatar = $request->file('profile');
            $avatarPath = $avatar->store('public/images/users'); // Store in 'storage/app/public/images/users'
            $avatarUrl = Storage::url($avatarPath);
        }
        try {
            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => bcrypt($request['password']),
                'profile' => $avatarUrl,
            ]);


            // Redirect to the login page with success message
            return redirect()->route('home')->with('success', 'User created successfully!');
        } catch (\Exception $e) {
            // Handle the error and redirect back with an error message and old input
            return redirect()->back()->withErrors(['error' => 'Failed to create user: ' . $e->getMessage()])->withInput();
        }
    }
    function loginview()
    {
        return view('pages.login');
    }
    function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $user = User::where('email', $email)->first();

        if ($user) {
            if (Hash::check($password, $user->password)) {
                // Login successful, store user data in session
                $request->session()->put([
                    'user_id' => $user->id,
                    'user_name' => $user->name,
                    'user_email' => $user->email,
                    'profile' => $user->profile
                ]);
                return redirect()->route('home');
            } else {
                return redirect()->back()->withErrors(['error' => 'Invalid Password']);

            }


        } else {
            return redirect()->back()->withErrors(['error' => 'Invalid email']);
        }
    }
    function logout(Request $request)
    {
        $request->session()->flush();

        // Optionally redirect to login or home page
        return redirect()->route('user.login');

    }
}
