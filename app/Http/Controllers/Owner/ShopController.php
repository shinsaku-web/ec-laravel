<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShopRequest;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ShopController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:owners");

        $this->middleware(function ($request, $next) {
            $shop_id = $request->route()->parameter('shop');
            if (!is_null($shop_id)) {
                $shopsOwnerId = Shop::findOrFail($shop_id)->owner->id;
                $ownerId = Auth::id();
                if ($shopsOwnerId !== $ownerId) {
                    return response()->json(["message" => "shopが存在しません"], Response::HTTP_NOT_FOUND);
                }
            }
            return $next($request);
        });
    }

    public function index(Request $request)
    {
        $id = Auth::id();
        $shop = Shop::where("owner_id", $id)->get();
        return response()->json($shop);
    }

    public function edit($id)
    {
        $shop = Shop::find($id);
        return response()->json($shop);
    }

    public function update(StoreShopRequest $request, $id)
    {

        // $idが妥当かチェック

        $img = $request->image;
        if (!is_null($img)) {
            try {
                Shop::where("id", $id)->update([
                    "name" => $request->name,
                    "information" => $request->information,
                    "filename" => Storage::putFile("public/shops", $img),
                    "is_selling" => $request->status === 'true' ? 1 : 0
                ]);
                return response()->json(["message" => "画像をアップロードしました。"]);
            } catch (\Throwable $th) {
                return response()->json(["message" => "更新に失敗しました。", "error" => $th], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }

        return response()->json(["message" => "更新に失敗しました。"], Response::HTTP_UNPROCESSABLE_ENTITY);
    }
}
