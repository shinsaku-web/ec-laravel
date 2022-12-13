<?php

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/user/login', function (Request $request) {
    $credentials = $request->validate([
        "email" => "required | email",
        "password" => "required",
    ]);
    if (auth("users")->attempt($credentials)) {
        return ["isAuth" => true]; //フロントでページ遷移させる
    }
    return response(["message" => "ユーザーが見つかりません。"], 422);
});

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
        // return ["user" => "ok!"];
        return auth("user")->user();
    });
});

// オーナーが使用するapi
Route::middleware('auth:owners')->group(function () {
    Route::get("/owner", function (Request $request) {
        return auth("owner")->user();
    });
});

// 管理者が使用するapi
Route::middleware('auth:admin')->group(function () {
    Route::get("/admin", function (Request $request) {
        return auth("admin")->user();
    });
});
