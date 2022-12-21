<?php

use App\Http\Controllers\Auth\User\LoginController;
use App\Http\Controllers\Auth\User\LogoutController;
use App\Http\Controllers\Auth\User\RegisterController;
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

Route::post('/user', [RegisterController::class, "register"]);
Route::post('/user/login', [LoginController::class, "login"]);

Route::post('/owner/login', function (Request $request) {
    $credentials = $request->validate([
        "email" => "required | email",
        "password" => "required",
    ]);
    if (auth("owners")->attempt($credentials)) {
        return ["isAuth" => true]; //フロントでページ遷移させる
    }
    return response(["message" => "オーナーが見つかりません。"], 422);
});

Route::post('/admin/login', function (Request $request) {
    $credentials = $request->validate([
        "email" => "required | email",
        "password" => "required",
    ]);
    if (auth("admin")->attempt($credentials)) {
        return ["isAuth" => true]; //フロントでページ遷移させる
    }
    return response(["message" => "管理者が見つかりません。"], 422);
});

// 認証済みユーザーが使用するapi
Route::middleware('auth:users')->prefix("user")->group(function () {
    Route::get("/", function (Request $request) {
        return auth("users")->user();
    });
    Route::post('/logout', [LogoutController::class, "logout"]);
});

// 認証済みオーナーが使用するapi
Route::middleware('auth:owners')->prefix("owner")->group(function () {
    Route::get("/", function (Request $request) {
        return auth("owners")->user();
    });
});

// 認証済み管理者が使用するapi
Route::middleware('auth:admin')->prefix("admin")->group(function () {
    Route::get("/", function (Request $request) {
        return auth("admin")->user();
    });
});
