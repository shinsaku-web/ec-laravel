<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'shop_id',
        "name",
        "information",
        "price",
        "is_selling",
        'sort_order',
        "secondary_category_id",
        "image1",
        "image2",
        "image3",
        "image4",
    ];

    public function shop()
    {
        return $this->belongsTo(Owner::class);
    }

    public function category()
    {
        return $this->belongsTo(SecondaryCategory::class, "secondary_category_id");
    }

    public function imageFirst()
    {
        return $this->belongsTo(Image::class, "image1", "id");
    }

    public function imageSecond()
    {
        return $this->belongsTo(Image::class, "image2", "id");
    }

    public function imageThird()
    {
        return $this->belongsTo(Image::class, "image3", "id");
    }

    public function imageFourth()
    {
        return $this->belongsTo(Image::class, "image4", "id");
    }

    public function stock()
    {
        return $this->hasMany(Stock::class);
    }
}
