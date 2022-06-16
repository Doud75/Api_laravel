<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostViewController;

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

Route::get('/', [PostViewController::class, "index"])->name("home");
Route::get('/postView/create', [PostViewController::class, "create"])->name("postView.create");
Route::get('/postView/{id}', [PostViewController::class, "show"])->name("postView.show");
Route::get('/upload', [PostViewController::class, "file"])->name("postView.file");
