<?php

use App\Http\Controllers\Admin\OwnerController;
use App\Http\Controllers\Auth\Admin\LoginController as AdminLoginController;
use App\Http\Controllers\Auth\Admin\LogoutController as AdminLogoutController;
use App\Http\Controllers\Auth\Admin\RegisterController as AdminRegisterController;
use App\Http\Controllers\Auth\Owner\LoginController as OwnerLoginController;
use App\Http\Controllers\Auth\Owner\LogoutController as OwnerLogoutController;
use App\Http\Controllers\Auth\Owner\RegisterController as OwnerRegisterController;
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

Route::post('/owner', [OwnerRegisterController::class, "register"]);
Route::post(
    '/owner/login',
    [OwnerLoginController::class, "login"]
);

Route::post('/admin', [AdminRegisterController::class, "register"]);
Route::post('/admin/login', [AdminLoginController::class, "login"]);


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
    Route::post('/logout', [OwnerLogoutController::class, "logout"]);
});

// 認証済み管理者が使用するapi
Route::middleware('auth:admin')->prefix("admin")->group(function () {
    Route::get("/", function (Request $request) {
        return auth("admin")->user();
    });
    // ------------オーナーCRUD処理
    Route::get("/owners", [OwnerController::class, "index"]);
    Route::post("/owners", [OwnerController::class, "store"]);
    Route::put("/owners/update", [OwnerController::class, "update"]);
    Route::delete("/owners/delete/{id}", [OwnerController::class, "destroy"]);
    // ------------オーナーCRUD処理ここまで
    Route::post('/logout', [AdminLogoutController::class, "logout"]);
});
