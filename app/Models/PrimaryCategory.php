<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrimaryCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sort_order',
    ];


    public function secondary()
    {
        return $this->hasMany(SecondaryCategory::class);
    }
}
