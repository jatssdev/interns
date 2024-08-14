<?php

namespace App\Http\Controllers;

use App\Models\admin;
use Illuminate\Http\Request;

class adminController extends Controller
{
    function admin()
    {
        return view('admin.dashboard');
    }
    function add()
    {
        return view('admin.addproduct');
    }
    function login()
    {
        return view('admin.login');
    }
    function loginpost(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $admin = admin::where('email', $email)->first();
        if ($admin) {
            $check = $admin->where('password', $password);
            if ($check) {
                return redirect()->route('admin.dashboard');
            }

        }



    }
}
