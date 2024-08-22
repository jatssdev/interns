<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\categoryController;
use App\Http\Controllers\userController;
use App\Models\categoryModel;
use App\Models\product;
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

Route::get('/admin/categories', [categoryController::class, 'categories'])->name('admin.categories');
Route::get('/admin/users', [adminController::class, 'users'])->name('admin.users');
Route::get('/admin/addproduct', [adminController::class, 'addpproduct'])->name('product.add');
Route::get('/admin/addcategory', [categoryController::class, 'showcategorypage'])->name('category.add');
Route::get('/admin/products', [adminController::class, 'getallproducts'])->name('admin.products');
Route::post('/admin/addproduct', [adminController::class, 'storepproduct'])->name('product.store');
Route::post('/admin/addcategory', [categoryController::class, 'store'])->name('category.store');

Route::get('/', function () {
    $products = product::all();
    return view('welcome', compact('products'));
})->name('index');
Route::get('/products/{category}', function ($category) {
    $products = product::where('category', $category)->get();
    $categories = categoryModel::all();
    // dd($products);
    return view('user.productpage', compact('products', 'categories'));
})->name('products');

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
