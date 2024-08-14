<?php


use App\Http\Controllers\userController;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('index');

Route::get('/about', function () {
    return view('about');
});
Route::get('/register', function () {
    return view('register');
});
Route::get('/login', [userController::class, 'log'])->name('login');
Route::get('/logout', [userController::class, 'logout']);

Route::post('/register', [userController::class, 'register']);
Route::post('/login', [userController::class, 'login']);