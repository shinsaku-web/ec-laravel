<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required | email",
            "password" => "required",
        ]);
        if (auth("users")->attempt($credentials)) {
            return response(["isAuth" => true]);
        }
        return response(["message" => "ユーザーが見つかりません。"], 422);
    }
}
