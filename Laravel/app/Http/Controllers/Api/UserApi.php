<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Users;

class UserApi extends Controller
{
    public function __construct()
    {
        
    }
    
    public function getAllUsers()
    {
        $users = new Users();
        $allUsers = $users->getAllUsers();
        return response()->json([
            'status' => 200,
            'message' => 'Get all users successful.',
            'userList' => $allUsers
        ]);
    }
}
