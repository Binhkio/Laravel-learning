<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurants extends Model
{
    use HasFactory;
    protected $table = 'Restaurants';
    protected $fillable = [
        'user_id',
        'res_name',
        'res_description',
        'res_image'
    ];
}
