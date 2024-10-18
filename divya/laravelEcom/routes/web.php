<?php

use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');
Route::get('/register', [userController::class, 'register'])->name('user.register');
Route::post('/register', [userController::class, 'store'])->name('user.store');
Route::get('/login', [userController::class, 'loginview'])->name('user.loginview');
Route::post('/login', [userController::class, 'login'])->name('user.login');
Route::get('/logout', [userController::class, 'logout'])->name('user.logout');