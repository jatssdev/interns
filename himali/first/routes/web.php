<?php

use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $data = ['jatin', 'magan', 'himali', 'devang'];
    return view('welcome', compact('data'));
})->name('index');

Route::get('/about', function () {
    return view('about');
})->name('himali');

Route::get('/register', function () {
    return view('user.register');
})->name('register');

Route::post('/register', [userController::class, 'register'])->name('user.register');
