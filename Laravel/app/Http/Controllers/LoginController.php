<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    
    public function getLogin(){
        return view('clients/login');
    }

    public function postLogin(Request $request){    // Receive $request as an array include data
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
        
        //  Get password of 'username'
        $userPassword = DB::table('Users')->where('username', $request['username'])->value('password');
        
        if($userPassword === $request['password']){
            $mins = 60*24;  //------------------------------------------SET TIME TOKEN
            $newToken = Str::random(200);
            $hashToken = hash('sha256', $newToken);
            // session(['login_token' => $hashToken]);
            Cookie::queue('login_token', $hashToken, $mins);
            DB::update('UPDATE [Users] SET [_token] = ? WHERE [username] = ?', [$hashToken, $request['username']]);
            
            $adminUsername = 'admin';
            if($request['username'] === $adminUsername){
                Session::put('admin', true);
                return redirect()->route('admin.home');
            }

            return redirect()->route('user.home-page');
        }
        else {
            $back_msg = 'Account not found!';
            $request->flashOnly('username');
            return redirect()->route('log-in', ['backmsg'=>'Account not found!']);
        }
    }
}
