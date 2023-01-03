<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SecondaryCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("secondary_categories")->insert([
            [
                "name" => "eslint",
                "primary_category_id" => 2,
                "sort_order" => 1,
            ],
            [
                "name" => "carbon",
                "primary_category_id" => 3,
                "sort_order" => 2,
            ],
            [
                "name" => "react-router-dom",
                "primary_category_id" => 1,
                "sort_order" => 3,
            ],
            [
                "name" => "axios",
                "primary_category_id" => 1,
                "sort_order" => 4,
            ],
            [
                "name" => "storybook",
                "primary_category_id" => 1,
                "sort_order" => 5,
            ],
        ]);
    }
}
