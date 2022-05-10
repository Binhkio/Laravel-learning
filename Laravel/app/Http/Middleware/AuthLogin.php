<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;

class AuthLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // dd($_COOKIE);
        $cur_token = Arr::exists($_COOKIE, 'login_token')?$_COOKIE['login_token']:null;
        if($cur_token !== null){
            $checkToken = DB::table('Users')->where('_token', $cur_token);
            if($checkToken !== null)
                return $next($request);
        }
        // return 'AuthLogin';
        return redirect('login');
    }
}
