<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable = [
        'img',
        'title',
        'price',
        'category',
        'img2',
        'img3',
        'img4',
        'img5'
    ];

}
