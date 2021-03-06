<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Users extends Model
{
    use HasFactory;

    protected $table = 'Users';
    protected $fillable = [
        'nickname',
        'username',
        'password',
        '_token'
    ];
    protected $hidden = 'password';
}
