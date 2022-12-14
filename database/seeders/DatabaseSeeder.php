<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Owner::factory(10)->create();
        \App\Models\Admin::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'test11',
            'email' => 'test@example.com',
        ]);
        \App\Models\User::factory()->create([
            'name' => 'test12',
            'email' => 'test2@example.com',
        ]);
        \App\Models\Owner::factory()->create([
            'name' => 'test11',
            'email' => 'test@example.com',
        ]);
        \App\Models\Owner::factory()->create([
            'name' => 'test12',
            'email' => 'test2@example.com',
        ]);
        \App\Models\Admin::factory()->create([
            'name' => 'test',
            'email' => 'test@example.com',
        ]);

        $this->call([
            ShopSeeder::class,
            ImageSeeder::class,
            PrimaryCategorySeeder::class,
            SecondaryCategorySeeder::class,
            ProductSeeder::class,
            StockSeeder::class,
        ]);
    }
}
