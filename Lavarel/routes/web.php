<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriesController;

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

//  Client routes

Route::get('/', function () {

});

Route::prefix('categories')->group(function(){

    //  List categories
    Route::get('/', [CategoriesController::class, 'index'])->name('categories.list');

    //  Get 1 category (use Show form)
    Route::get('/edit/{id}', [CategoriesController::class, 'getCategories'])->name('categories.edit');

    //  Update categories
    Route::post('/edit/{id}', [CategoriesController::class, 'updateCategories']);

    //  Show form add categories
    Route::get('/add', [CategoriesController::class, 'addCategories'])->name('categories.add');

    //  Add categories
    Route::post('/add', [CategoriesController::class, 'handleAddCategories']);

    //  Delete categories
    Route::delete('/delete/{id}', [CategoriesController::class, 'deleteCategories'])->name('categories.delete');
});

Route::prefix('admin')->group(function(){
    
});