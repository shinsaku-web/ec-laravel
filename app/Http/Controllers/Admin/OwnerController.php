<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Owner;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class OwnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO:日時の変換
        $owners =  Owner::all(['id', 'name', "email", "created_at"]);
        return response()->json($owners);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => 'required',
            'email' => "required | email | unique:users",
            "password" => "required | same:password2",
            "password2" => "required",
        ]);
        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $owner = Owner::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
        ]);
        try {
            DB::transaction(function () use ($owner) {
                // shopの作成処理をかく。
                Shop::create([
                    "owner_id" => $owner->id,
                    "name" => "ここに店名が入ります。",
                    "information" => "ここにお店の情報が入ります。ここにお店の情報が入ります。ここにお店の情報が入ります。ここにお店の情報が入ります。ここにお店の情報が入ります。ここにお店の情報が入ります。",
                    "filename" => "",
                    "is_selling" => true
                ]);
            });
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }

        $json = [
            'data' => $owner,
            'message' => 'Owner registration success!',
            'error' => ''
        ];
        return response()->json($json, Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $owner = Owner::findOrFail($id);
        return $owner;
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
        Owner::where('id', $id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = Owner::findOrFail($id)->delete();
        return $deleted;
    }
}
