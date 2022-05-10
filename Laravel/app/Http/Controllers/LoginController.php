<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Models\Users;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cookie;
class LoginController extends Controller
{
    
    public function getLogin(){
        return view('clients/login');
    }

    public function postLogin(Request $request){    // Receive $request as an array include data
        // $request->validate([
        //     'username' => 'required',
        //     'password' => 'required'
        // ],[
        //     'username.required' => 'Please type username',
        //     'password.required' => 'Please type password'
        // ]);
        $user = new Users();

        $userExist = $user->userExist($request['username'], $request['password']);
        
        if($userExist){
            $mins = 1;
            $newToken = Str::random(200);
            $hashToken = hash('sha256', $newToken);
            // $request->session()->put('login_token', $hashToken);
            Cookie::queue('login_token', $hashToken, $mins);
            DB::update('UPDATE [Users] SET [_token] = ? WHERE [username] = ?', [$hashToken, $request['username']]);
            return redirect('home');
        }
        else
            return view('clients/login', ['msg' => 'Account not found']);
    }
}
