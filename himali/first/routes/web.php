<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Auth;
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




Route::get('/admin', function () {
    return view('admin.dashboard');
})->name('admin');

Route::get('/admin/users', [adminController::class, 'users'])->name('admin.users');
Route::get('/admin/addproduct', [adminController::class, 'addpproduct'])->name('product.add');
Route::post('/admin/addproduct', [adminController::class, 'storepproduct'])->name('product.store');

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
Route::get('/login', function () {
    return view('user.login');
})->name('login');
Route::get('/logout', function (Request $request) {
    Auth::logout();
    return back()->with('success', 'logout successfully');
})->name('user.logout');

Route::post('/register', [userController::class, 'register'])->name('user.register');
Route::post('/login', [userController::class, 'login'])->name('user.login');
