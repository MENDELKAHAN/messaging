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


    


Auth::routes();
Route::get('/', [\App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/inbox', [\App\Http\Controllers\HomeController::class, 'inbox'])->name('home');
Route::get('/all', [\App\Http\Controllers\HomeController::class, 'all'])->name('all');
Route::get('/sent', [\App\Http\Controllers\HomeController::class, 'sent'])->name('sent');
Route::get('/deleted', [\App\Http\Controllers\HomeController::class, 'deleted'])->name('deleted');

Route::get('/message/show/{id}', [\App\Http\Controllers\MessagesController::class, 'show']);