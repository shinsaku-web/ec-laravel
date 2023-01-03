<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StockSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("stocks")->insert([
            [
                "product_id" => 1,
                "type" => 1,
                "quantity" => 100,
            ],
            [
                "product_id" => 2,
                "type" => 1,
                "quantity" => 100,
            ],
            [
                "product_id" => 1,
                "type" => 0,
                "quantity" => 100,
            ],
            [
                "product_id" => 2,
                "type" => 0,
                "quantity" => 100,
            ],
        ]);
    }
}