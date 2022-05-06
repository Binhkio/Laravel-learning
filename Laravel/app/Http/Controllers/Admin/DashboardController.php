<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct(){
        echo '<h2>__construct func runs whenever any controller is called !!</h2>';
        
    }

    public function index(){
        return '<h2>Dash board</h2>';
    }
}
