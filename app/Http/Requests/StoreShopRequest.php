<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

use Illuminate\Foundation\Http\FormRequest;

class StoreShopRequest extends FormRequest
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
            'name' => 'required|max:255',
            'information' => 'required|max:255',
            'image' => 'required|max:2048|image|mimes:png,jpg,jpeg',
            'status' => [
                'required',
                Rule::in(["true", "false"]),
            ]
        ];
    }

    public function messages()
    {
        return [
            "name" => "名前は必須です。",
            "information" => "店舗情報は必須です。",
            "image" => "指定されたファイルが画像ではありません。",
            "status" => "販売状況は必須です。",
        ];
    }
}
