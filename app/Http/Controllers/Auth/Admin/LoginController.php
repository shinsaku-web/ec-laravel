<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            "email" => "required | email",
            "password" => "required",
        ]);
        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(["message" => "Login Success!!"], Response::HTTP_OK);
        }
        return response()->json(["message" => "Login Failed!!"], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
