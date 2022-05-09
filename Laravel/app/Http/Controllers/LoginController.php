<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    
    public function login(Request $request){    // Receive $request as an array include data
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ],[
            'username.required' => 'Please type username',
            'password.required' => 'Please type password'
        ]);
        
        return 'Successfully';
    }
}
