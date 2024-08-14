<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\userController;
use Illuminate\Support\Facades\Route;

Route::get('/', [userController::class, 'index'])->name('index');
Route::get('/register', function () {
    return view('register');
});
Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/user/logout', [userController::class, 'logout'])->name('logout');
Route::post('/user/register', [userController::class, 'register'])->name('storeuser');
Route::post('/user/login', [userController::class, 'login'])->name('user.login');
Route::post('/user/delete', [userController::class, 'delete'])->name('user.delete');




// admin 
Route::get('/admin', [adminController::class, 'admin'])->name('admin');
Route::get('/admin/add', [adminController::class, 'add'])->name('admin.add');
Route::get('/admin/login', [adminController::class, 'login'])->name('admin.log');


Route::post('/admin/login', [adminController::class, 'loginpost'])->name('admin.login');