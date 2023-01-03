<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrimaryCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("primary_categories")->insert([
            [
                "name" => "react",
                "sort_order" => 1,
            ],
            [
                "name" => "typescript",
                "sort_order" => 2,
            ],
            [
                "name" => "php",
                "sort_order" => 3,
            ],
            [
                "name" => "laravel",
                "sort_order" => 4,
            ],
            [
                "name" => "nextjs",
                "sort_order" => 5,
            ],
        ]);
    }
}
