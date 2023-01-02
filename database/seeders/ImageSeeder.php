<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("images")->insert([
            [
                "owner_id" => 11,
                "filename" => "sample1.jpg",
                "title" => "test1",
            ],
            [
                "owner_id" => 12,
                "filename" => "sample2.jpg",
                "title" => "test2",
            ],
            [
                "owner_id" => 11,
                "filename" => "sample3.jpg",
                "title" => "test3",
            ],
            [
                "owner_id" => 12,
                "filename" => "sample4.jpg",
                "title" => "test4",
            ],
            [
                "owner_id" => 11,
                "filename" => "sample5.jpg",
                "title" => "test5",
            ],
            [
                "owner_id" => 12,
                "filename" => "sample6.jpg",
                "title" => "test6",
            ],
            [
                "owner_id" => 11,
                "filename" => "sample7.jpg",
                "title" => "test7",
            ],
            [
                "owner_id" => 12,
                "filename" => "sample8.jpg",
                "title" => "test8",
            ],
            [
                "owner_id" => 11,
                "filename" => "sample9.jpg",
                "title" => "test9",
            ],
        ]);
    }
}
