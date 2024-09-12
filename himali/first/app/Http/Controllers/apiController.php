<?php

namespace App\Http\Controllers;

use App\Models\product;
use App\Models\User;
use Illuminate\Http\Request;

class apiController extends Controller
{
    function products(Request $request)
    {
        $products = product::all();
        return response()->json($products);
    }
    function users()
    {
        $users = User::all();
        return response()->json($users);
    }
    function register(Request $request)
    {
        $jsonData = $request->getContent();

        // Convert the JSON string into a PHP associative array
        $data = json_decode($jsonData, true);

        $existing = User::where('email', $data->email)->first();

        if ($existing) {
            $res = array("success" => false, "message" => "user already exists");

            return response()->json($res);
        } else {
            User::create([
                'name' => $data->name,
                'email' => $data->email,
                'password' => bcrypt($data->password),
            ]);
            $res = array("success" => true, "message" => "user Registered Sucessfully");

            return response()->json($res);
        }

    }
}
