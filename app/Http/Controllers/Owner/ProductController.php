<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Owner;
use App\Models\Product;
use App\Models\SecondaryCategory;
use App\Models\Shop;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:owners");

        $this->middleware(function ($request, $next) {
            $product_id = $request->route()->parameter('product');
            if (!is_null($product_id)) {
                $productOwnerId = Product::findOrFail($product_id)->shop->owner->id;
                $ownerId = Auth::id();
                if ($productOwnerId !== $ownerId) {
                    return response()->json(["message" => "productが存在しません"], Response::HTTP_NOT_FOUND);
                }
            }
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ownerInfo = Owner::with([
            "shop.product" => [
                "imageFirst",
                "imageSecond",
                "imageThird",
                "imageFourth",
            ]
        ])->where("id", Auth::id())->get();
        return response()->json($ownerInfo[0]->shop->product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $shops = Shop::where("owner_id", Auth::id())->get(["id", "name"]);
        $categories = SecondaryCategory::all(["id", "name"]);
        return response()->json(["shops" => $shops, "categories" => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        try {
            Product::create([
                "shop_id" => $request->shop_id,
                "name" => $request->name,
                "information" => $request->information,
                "price" => $request->price,
                "is_selling" => $request->is_selling,
                "sort_order" => $request->sort_order,
                "secondary_category_id" => $request->secondary_category_id,
                "image1" => $request->image1,
                "image2" => $request->image2,
                "image3" => $request->image3,
                "image4" => $request->image4,
            ]);
            return response()->json(["message" => "登録に成功しました。"]);
        } catch (\Throwable $th) {
            return response()->json(["message" => $th->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
