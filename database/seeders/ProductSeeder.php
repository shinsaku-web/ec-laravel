<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("products")->insert([
            [
                "shop_id" => 1,
                "name" => "商品名が入ります",
                "information" => "商品情報が入ります。",
                "price" => 10000,
                "is_selling" => 1,
                "sort_order" => 1,
                "secondary_category_id" => 1,
                "image1" => 1,
                "image2" => 2,
            ],
            [
                "shop_id" => 1,
                "name" => "商品名が入ります",
                "information" => "商品情報が入ります。",
                "price" => 20000,
                "is_selling" => 0,
                "sort_order" => 2,
                "secondary_category_id" => 2,
                "image1" => 5,
                "image2" => 6,
            ],
            [
                "shop_id" => 2,
                "name" => "商品名が入ります",
                "information" => "商品情報が入ります。",
                "price" => 30000,
                "is_selling" => 1,
                "sort_order" => 1,
                "secondary_category_id" => 3,
                "image1" => 2,
                "image2" => 4,
            ],
            [
                "shop_id" => 2,
                "name" => "商品名が入ります",
                "information" => "商品情報が入ります。",
                "price" => 40000,
                "is_selling" => 0,
                "sort_order" => 2,
                "secondary_category_id" => 4,
                "image1" => 1,
                "image2" => 3,
            ],
        ]);
    }
}
