<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
Route::middleware(['cors'])->group(function () {
  Route::post('login', 'Api\AuthController@login');
  Route::post('register', 'Api\AuthController@register');
  Route::get('refresh', 'Api\AuthController@refresh');
  Route::group(['middleware' => ['jwt.auth']], function () {
      Route::post('logout', 'Api\AuthController@logout');
      Route::get('me', 'Api\AuthController@me');
  });
});
