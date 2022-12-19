<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

Route::post('/user', [UserController::class, "store"]);

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

// ユーザーが使用するapi
Route::middleware('auth:users')->group(function () {
    Route::get("/user", function (Request $request) {
        return auth("users")->user();
    });
});

// オーナーが使用するapi
Route::middleware('auth:owners')->group(function () {
    Route::get("/owner", function (Request $request) {
        return auth("owners")->user();
    });
});

// 管理者が使用するapi
Route::middleware('auth:admin')->group(function () {
    Route::get("/admin", function (Request $request) {
        return auth("admin")->user();
    });
});
