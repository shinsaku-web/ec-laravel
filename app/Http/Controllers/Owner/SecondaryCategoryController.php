<?php

namespace App\Http\Controllers\Owner;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSecondaryCategoryRequest;
use App\Http\Requests\UpdateSecondaryCategoryRequest;
use App\Models\SecondaryCategory;

class SecondaryCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSecondaryCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSecondaryCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SecondaryCategory  $secondaryCategory
     * @return \Illuminate\Http\Response
     */
    public function show(SecondaryCategory $secondaryCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SecondaryCategory  $secondaryCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(SecondaryCategory $secondaryCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSecondaryCategoryRequest  $request
     * @param  \App\Models\SecondaryCategory  $secondaryCategory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSecondaryCategoryRequest $request, SecondaryCategory $secondaryCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SecondaryCategory  $secondaryCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(SecondaryCategory $secondaryCategory)
    {
        //
    }
}
