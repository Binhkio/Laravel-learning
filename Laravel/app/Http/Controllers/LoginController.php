<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    
    public function login(Request $req){    // Receive $request as an array include data
        // return "<h1>Logged in</h1>";
        return $req['username'];
    }
}
