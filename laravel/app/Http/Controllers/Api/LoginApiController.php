<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LoginApiController extends Controller
{
    public function login(Request $request){    // Receive $request as an array include data
        
        // Check request value
        $request->validate([
            'username' => 'required|max:255',
            'password' => 'required|max:255'
        ],[
            'username.required' => 'Please type username',
            'password.required' => 'Please type password',
            'username.max' => 'Please type less than 255 characters',
            'password.max' => 'Please type less than 255 characters'
        ]);
        
        //  Default response
        function defaultResponse($message, $status){
            return response()->json([
                'content' => $message
            ], $status);
        }


        //  Check user exist
        $user = DB::table('Users')->where('username', $request['username']);
        if(empty($user)){
            return defaultResponse('Account not found!', 401);
        }

        //  Check password
        $db_password = $user->value('password');
        if($db_password !== $request['password']){
            return defaultResponse('Wrong password!', 401);
        }

        //  Login successful----------------------------------------
        //  Create token
        $token = Str::random(256);
        $user->update(['_token' => $token]);

        return defaultResponse('Login successful', 200)->cookie('_token', $token, 60);
    }

    public function logout(Request $request){
        //  Delete token on web

        //  Delete token on database
        $user = DB::table('Users')->where('username', $request['username']);
        if($user->value('_token') !== null){
            $user->update(['_token' => null]);
        }

        return response()->json([
            'content' => 'Logout successful!',
        ], 200)->withCookie('_token', null, 0);
    }

    public function register(Request $request){
        $newUser = [
            'nickname' => $request['nickname'],
            'username' => $request['username'],
            'password' => $request['password']
        ];
        
    }
}
