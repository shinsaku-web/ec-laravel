<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            "image1" => "integer",
            "image2" => "integer",
            "image3" => "integer",
            "image4" => "integer",
        ];
    }
}
