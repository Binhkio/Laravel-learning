<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\LoginController;

use Illuminate\Http\Response;

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
    return view('clients/login');
});
Route::post('/', [LoginController::class, 'login']);

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

Route::middleware('auth.admin')->prefix('admin')->group(function(){
    Route::get('/', [DashboardController::class, 'index']);
});

Route::get('response', function(){

    $content = '<h2>Laravel</h2>';
    $json_content = [
        'search content-type at',
        'https://github.com/danielmiessler/SecLists/blob/master/Discovery/Web-Content/web-all-content-types.txt'
    ];

    // $response = (new Response($json_content))->header('Content-Type', 'application/json');    //use Response()
    // $response = response('Laravel', 201);   // use helper response()
    
    // Cookie
    // $response = (new Response())->cookie('cookie', 'cookie-value', 1);  // cookie('name', 'value', minutes)
    
    // Get cookie by: Request $request => $request->cookie('name');

    // JSON

    $contentArr = [
        'name' => 'Quan',
        'age' => '19'
    ];
    $response = response()->json($contentArr, 201)->header('Api-Key', '12345');

    return $response;
});