<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            "information" => fake()->realText(),
            "price" => fake()->numberBetween(10, 100000),
            "is_selling" => fake()->numberBetween(0, 1),
            "sort_order" => fake()->randomNumber(),
            "shop_id" => fake()->numberBetween(1, 2),
            "secondary_category_id" => fake()->numberBetween(1, 3),
            "image1" => fake()->numberBetween(1, 6),
            "image2" => fake()->numberBetween(1, 6),
            "image3" => fake()->numberBetween(1, 6),
            "image4" => fake()->numberBetween(1, 6),
        ];
    }
}
