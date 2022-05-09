<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
// use DB;

use App\Models\Users;

class HomeController extends Controller
{
    public function getUsers(){
        $users = new Users();
        $userList = $users->getAllUsers();
        return $userList;
    }
}
