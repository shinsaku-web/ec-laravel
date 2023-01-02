<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:owners");

        $this->middleware(function ($request, $next) {
            $image_id = $request->route()->parameter('image');
            if (!is_null($image_id)) {
                $ImageOwnerId = Image::findOrFail($image_id)->owner->id;
                $ownerId = Auth::id();
                if ($ImageOwnerId !== $ownerId) {
                    return response()->json(["message" => "imageが存在しません"], Response::HTTP_NOT_FOUND);
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
        $id = Auth::id();
        $images = Image::where("owner_id", $id)->orderBy("updated_at", "desc")->select("id", "filename", "title")->paginate(20);
        return response()->json($images);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $images = $request->images;
        if ($images) {
            try {
                $ownerId = Auth::id();
                $data = array_map(function ($img) use ($ownerId) {
                    return [
                        "owner_id" => $ownerId,
                        "filename" => str_replace("public/products/", "", Storage::putFile("public/products", $img)),
                    ];
                }, $images);
                Image::insert($data);
                return response()->json(["message" => "画像をアップロードしました。"]);
            } catch (\Throwable $th) {
                return response()->json(["message" => "更新に失敗しました。", "error" => $th->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }

        return response()->json(["message" => "更新に失敗しました。"], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $images = Image::where("id", $id)->first();
        return response()->json($images);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $img = $request->image;
        if (!is_null($img)) {
            try {
                Image::where("id", $id)->update([
                    "title" => $request->title,
                    "filename" => str_replace("public/products/", "", Storage::putFile("public/products", $img)),
                ]);
                return response()->json(["message" => "更新に成功しました。"]);
            } catch (\Throwable $th) {
                return response()->json(["message" => "更新に失敗しました。", "error" => $th->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }

        return response()->json(["message" => "更新に失敗しました。"], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $image = Image::findOrFail($id);
            $filePath = "public/products/" . $image->filename;

            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
                $image->delete();
                return response()->json(["message" => "削除しました。"]);
            }
        } catch (\Throwable $th) {
            return response()->json(["message" => "削除に失敗しました。", "error" => $th->getMessage()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
