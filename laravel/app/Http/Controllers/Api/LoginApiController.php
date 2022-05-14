<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

use App\Models\Users;

class LoginApiController extends Controller
{
    public function login(Request $request){    // Receive $request as an array include data
        
        // Check request value
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:255',
            'password' => 'required|max:255'
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->errors()->first()
            ], 401);
        }
        
        //  Default response
        function defaultResponse($message, $status){
            return response()->json([
                'content' => $message
            ], $status);
        }

        $user = DB::table('Users')->where('username', $request['username']);

        //  Check user exist
        $userExist = $user->exists();
        if(!$userExist){
            return defaultResponse('Account not found!', 401);
        }

        //  Check password
        $hashedPassword = $user->value('password');
        if(!(Hash::check($request['password'], $hashedPassword))){
            return defaultResponse('Wrong password!', 401);
        }

        //  Login successful----------------------------------------
        //  Create token
        $token = Str::random(256);
        $user->update(['_token' => $token]);

        return defaultResponse('Login successfully', 200)->cookie('_token', $token, 60);
    }

    public function logout(Request $request){
        //  Delete token on web

        //  Delete token on database
        $user = DB::table('Users')->where('username', $request['username']);
        if($user->value('_token') !== null){
            $user->update(['_token' => null]);
        }

        return response()->json([
            'content' => 'Logout successfully',
        ], 200)->withCookie('_token', null, 0);
    }

    public function register(Request $request){
        // Check request value
        $validator = Validator::make($request->all(), [
            'nickname' => 'required|max:255',
            'username' => 'required|max:255',
            'password' => 'required|max:255'
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->errors()->first()
            ], 401);
        }
        
        //  Check exist
        $userExist = DB::table('Users')->where('username', $request['username'])->exists();
        if($userExist){
            return response()->json([
                'content' => 'Account existed'
            ], 401);
        }
        //  Register
        $hashedPassword = Hash::make($request['password']);
        $token = Str::random(256);
        
        $newUser = new User();
        $newUser->nickname = $request['nickname'];
        $newUser->username = $request['username'];
        $newUser->password = $hashedPassword;
        $newUser->_token = $token;
        $newUser->isAdmin = 0;
        $newUser->save();
        return response()->json([
            'content' => 'Register successfully',
        ],200);
    }
}
