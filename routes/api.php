<?php

use App\Models\User;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::get('/test', function () {
    return json_encode(["hello" => "tohoku"]);
});

Route::post('/user/login', function (Request $request) {
    $credentials = $request->validate([
        "email" => "required | email",
        "password" => "required",
    ]);
    if (auth("users")->attempt($credentials)) {
        return ["result" => true]; //フロントでページ遷移させる
    }
    return response(["message" => "ユーザーが見つかりません。"], 422);
});

Route::middleware('auth:users')->group(function () {
    Route::get("/user", function (Request $request) {
        return ["user" => "ok!"];
    });
});
