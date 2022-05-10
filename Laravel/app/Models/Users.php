<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;

use function PHPUnit\Framework\returnSelf;

class Users extends Model
{
    use HasFactory;

    public function getAllUsers(){
        $users = DB::table('Users')->get();
        return $users;
    }

    public function accessToken($name, $newToken){
        $user = DB::table('Users')->where('username', $name);
    }

    public function userExist($name, $pass){
        // $user_password = DB::select("SELECT [?] FROM [?] WHERE [?] = '?'", ['password', 'Users', 'username', $name]);
        $user_password = DB::table('Users')->where('username', $name)->value('password');
        // dd($user_password);
        if ($user_password === $pass)
            return true;
        else 
            return false;
    }


}
