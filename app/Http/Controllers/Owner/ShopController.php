<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ShopController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:owners");
    }

    public function index(Request $request)
    {
        $id = Auth::id();
        $shop = Shop::where("owner_id", $id)->get();
        return response()->json($shop);
    }

    public function edit($id)
    {
    }
}
