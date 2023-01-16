<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMessage(Request $request){
        $input = $request->all();
    }
}
