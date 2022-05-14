<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//  Controller
use App\Http\Controllers\Api\LoginApiController;
use App\Http\Controllers\Api\RestaurantController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//------------------------ LOGIN API ------------------------------------------
Route::post('login', [LoginApiController::class, 'login']);
Route::post('logout', [LoginApiController::class, 'logout']);
Route::post('register', [LoginApiController::class, 'register']);
//-----------------------------------------------------------------------------


//----------------- RESTAURANT CONTROLLER API----------------------------------
Route::middleware('auth.token')->prefix('restaurant')->group(function(){
    //-----------------------------------------------------------------
    Route::post('/store', [RestaurantController::class, 'store']);
    Route::get('/index', [RestaurantController::class, 'index']);
    //-----------------------------------------------------------------
    Route::get('/edit/{id}', [RestaurantController::class, 'edit']);
    Route::get('/update/{id}', [RestaurantController::class, 'update']);
    Route::delete('/delete/{id}', [RestaurantController::class, 'delete']);
});
//-----------------------------------------------------------------------------