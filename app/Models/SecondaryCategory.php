<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SecondaryCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        "primary_category_id",
        'sort_order',
    ];
}
