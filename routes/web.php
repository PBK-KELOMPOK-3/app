<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', function(){
    return view('home', [
        "title" => "Home"
    ]);
});

Route::get('/login', function(){
    return view('login', [
        "title" => "Login"
    ]);
});

Route::get('/bgame', function(){
    return view('bgame', [
        "title" => "difficulty"
    ]);
});

Route::get('/gamep', function(){
    return view('gamep', [
        "title" => "Scrambel Word"
    ]);
});