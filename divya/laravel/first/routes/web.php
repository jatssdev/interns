<?php


use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/about', function () {
    return view('about');
});
Route::get('/register', function () {
    return view('register');
});

Route::post('/register', function (Request $request) {

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
});