<?php
 
namespace App\Http\Controllers\Database;
 
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
 
class UserController extends Controller
{
    /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */

    public function __construct(){

    }

    public function index()
    {
        // $DB = DB::connection('CSDL');
        $users = DB::select('select * from Users');
 
        return view('clients.index', ['users' => $users]);
    }
}