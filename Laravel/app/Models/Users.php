<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;

class Users extends Model
{
    use HasFactory;

    public function getAllUsers(){
        $users = DB::select('SELECT * FROM Users');
        return $users;
    }
}
