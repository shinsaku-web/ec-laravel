<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePrimaryCategoryRequest;
use App\Http\Requests\UpdatePrimaryCategoryRequest;
use App\Models\PrimaryCategory;

class PrimaryCategoryController extends Controller
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
     * @param  \App\Http\Requests\StorePrimaryCategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePrimaryCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PrimaryCategory  $primaryCategory
     * @return \Illuminate\Http\Response
     */
    public function show(PrimaryCategory $primaryCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PrimaryCategory  $primaryCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(PrimaryCategory $primaryCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePrimaryCategoryRequest  $request
     * @param  \App\Models\PrimaryCategory  $primaryCategory
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePrimaryCategoryRequest $request, PrimaryCategory $primaryCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PrimaryCategory  $primaryCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(PrimaryCategory $primaryCategory)
    {
        //
    }
}
