<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class PostsController extends Controller
{

    public function __construct(){
        $this->users = new Users();
        
    }

    public function displayAllPosts(){  // Import from Model/Users
        $posts = $this->users->getAllPosts();
        // dd($this->users->getAllPosts());
        return view('clients.display-posts', compact('posts'));
    }
}
