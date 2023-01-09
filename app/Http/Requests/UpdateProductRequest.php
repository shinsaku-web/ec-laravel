<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "shop_id" => "required",
            "name" => "required | max:255",
            "information" =>
            "required | max:255",
            "price" => "required | max:8",
            "is_selling" => "required | boolean",
            "sort_order" => "required | max:8",
            "secondary_category_id" => "required | max:8",
            "quantity" => "required|integer|between:0,99",
            "image1" => "integer | nullable",
            "image2" => "integer | nullable",
            "image3" => "integer | nullable",
            "image4" => "integer | nullable",
        ];
    }
}
