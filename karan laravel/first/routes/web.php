<?php

use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [userController::class, 'index'])->name('user.main');


Route::get('/adduser', function () {
    return view('adduser');
});

Route::get('/register', function () {
    return view('register');
});
Route::post('/register', [userController::class, 'register'])->name('user.login');
Route::get('/login', function () {
    return view('login');
});
Route::post('/login', [userController::class, 'login'])->name('user.login');

Route::post('/add', [userController::class, 'add'])->name('user.add');
Route::get('/edit/{id}', [userController::class, 'edit'])->name('user.edit');
Route::put('/update/{id}', [userController::class, 'update'])->name('user.update');


Route::delete('/delete/{id}', [userController::class, 'destroy'])->name('user.destroy');
