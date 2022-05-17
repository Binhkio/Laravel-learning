<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
// use Illuminate\Support\Facades\Storage;

class AuthToken
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
        $cur_token = $request['_token'];
        // Storage::disk('local')->get('_token');
        $tokenExist = DB::select('SELECT * FROM [Users] WHERE [_token] = ?', [$cur_token]);
        if(!empty($tokenExist)){
            return $next($request);
        }
        return response()->json([
            'content' => 'You don\'t have permission',
            'request' => $request
        ], 401);
    }
}
    