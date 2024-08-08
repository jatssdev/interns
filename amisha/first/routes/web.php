<?php

use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;

Route::get('/', [userController::class, 'index'])->name('index');
Route::get('/register', function () {
    return view('register');
});

Route::post('/user/register', [userController::class, 'register'])->name('storeuser');
Route::post('/user/delete', [userController::class, 'delete'])->name('user.delete');