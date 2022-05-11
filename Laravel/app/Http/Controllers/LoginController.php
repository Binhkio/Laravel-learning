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
        dd($request);
        
        $request->validate([
            'username' => 'required|max:255',
            'password' => 'required|max:255'
        ],[
            'username.required' => 'Please type username',
            'password.required' => 'Please type password',
            'username.max' => 'Please type less than 255 characters',
            'password.max' => 'Please type less than 255 characters'
        ]);
        
        $userExist = DB::table('Users')->where('username', $request['username'])->value('password');
        // dd($userExist);
        
        if($userExist === $request['password']){
            $mins = 1;
            $newToken = Str::random(200);
            $hashToken = hash('sha256', $newToken);
            // session(['login_token' => $hashToken]);
            Cookie::queue('login_token', $hashToken, $mins);
            DB::update('UPDATE [Users] SET [_token] = ? WHERE [username] = ?', [$hashToken, $request['username']]);
            
            $adminUsername = 'admin';
            if($request['username'] === $adminUsername){
                Session::flash('admin', true);
                return redirect()->route('admin.home');
            }

            return redirect('home');
        }
        else
            return view('clients/login', ['msg' => 'Account not found']);
    }
}
