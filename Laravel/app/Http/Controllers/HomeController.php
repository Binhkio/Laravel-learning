<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getUsers(){

        $users = DB::select('select * from Users');

        dd($users);
    }
}
