<?php

use App\Http\Controllers\productController;
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






Route::get('/addproduct', [productController::class, 'addshow'])->name('addproductshow');
Route::get('/showproduct', [productController::class, 'showproduct'])->name('showproduct');
Route::post('/storeproduct', [productController::class, 'storeproduct'])->name('addproduct');