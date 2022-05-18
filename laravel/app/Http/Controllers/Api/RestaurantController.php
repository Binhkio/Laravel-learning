<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Restaurants;
use App\Models\Users;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

use function PHPSTORM_META\map;

class RestaurantController extends Controller
{
    public function index(){
        $restaurants = Restaurants::all();
        $nickname = [];
        for($i=0; $i<count($restaurants); $i++){
            $name = DB::table('Users')->where('id', $restaurants[$i]->user_id)->value('nickname');
            $nickname[$i] = $name;
        }
        return response()->json([
            'restaurants' => $restaurants,
            'nickname' => $nickname
        ], 200);
    }

    public function myIndex(Request $request, $token){
        $user_id = DB::table('Users')->where('_token', $token)->value('id');
        $restaurants = DB::table('Restaurants')->where('user_id', $user_id)->get();
        
        return response()->json([
            'restaurants' => $restaurants
        ], 200);
    }

    public function store(Request $request){
        $user_id = DB::table('Users')->where('_token', $request->input('_token'))->value('id');

        //  Validate
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required|max:9999',
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->errors()->first()
            ], 411);
        }

        $restaurants = new Restaurants;
        $restaurants->user_id = $user_id;
        $restaurants->res_name = $request->input('name');
        $restaurants->res_description = $request->input('description');
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = time().'.'.$extension;
            $file->move('/home/binhkio/Documents/Backend/Laravel-learning/reactjs/src/uploads/images/', $fileName);
            $restaurants->res_image = $fileName;
        }
        $restaurants->save();

        return response()->json([
            'content' => 'Add Restaurant Successfully!',
        ], 200);
    }
    

    public function edit(Request $request, $id){
        
        //  Check permission
        $res = DB::select('SELECT [user_id] FROM [Restaurants] WHERE [id] = ?', [$id]);
        if(empty($res)){
            return response()->json([
                'content' => 'Restaurant is not exist'
            ], 401);
        }
        $cur_token = $request->cookie('_token');
        $id_user = DB::select('SELECT [id] FROM [Users] WHERE [_token] = ?', [$cur_token]);
        if($res[0]->user_id !== $id_user[0]->id){
            return response()->json([
                'content' => 'You don\'t have permission',
            ], 401);
        }
        
        //  Edit
        $restaurants = Restaurants::all();
        $res = $restaurants->find($id);
        return response()->json([
            'id' => $id,
            'restaurant' => $res
        ], 200);
    }

    public function update(Request $request, $id, $token){
        
        //  Check permission
        $res = DB::select('SELECT [user_id] FROM [Restaurants] WHERE [id] = ?', [$id]);
        if(empty($res)){
            return response()->json([
                'content' => 'Restaurant is not exist'
            ], 401);
        }
        $cur_token = $token;
        $id_user = DB::select('SELECT [id] FROM [Users] WHERE [_token] = ?', [$cur_token]);
        if($res[0]->user_id !== $id_user[0]->id){
            return response()->json([
                'content' => 'You don\'t have permission',
            ], 401);
        }
        
        //  Update
        $user_id = DB::table('Users')->where('_token', $cur_token)->value('id');

        //  Validate
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required|max:9999',
            'image' => 'required|max:9999',
        ]);
        if($validator->fails()){
            return response()->json([
                'validate_err' => $validator->errors()->first()
            ], 401);
        }

        $restaurants = Restaurants::all();
        $res = $restaurants->find($id);
        $res->user_id = $user_id;
        $fileName = '';
        if($request->hasFile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $fileName = time().'.'.$extension;
            $file->move('/home/binhkio/Documents/Backend/Laravel-learning/reactjs/src/uploads/images/', $fileName);
        }
        $res->update([
            'res_name' => $request['name'],
            'res_descroption' => $request['description'],
            'res_image' => $fileName
        ]);

        return response()->json([
            'content' => 'Update Restaurant Successfully!',
            'id' => $id,
            'token' => $token,
            'res_image' => $fileName
        ], 200);
    }

    public function delete(Request $request, $id, $token){
        
        //  Check permission
        $res = DB::select('SELECT [user_id] FROM [Restaurants] WHERE [id] = ?', [$id]);
        if(empty($res)){
            return response()->json([
                'content' => 'Restaurant is not exist'
            ], 401);
        }
        $cur_token = $token;
        $id_user = DB::select('SELECT [id] FROM [Users] WHERE [_token] = ?', [$cur_token]);
        if($res[0]->user_id !== $id_user[0]->id){
            return response()->json([
                'content' => 'You don\'t have permission',
            ], 401);
        }
        
        //  Delete
        $restaurants = Restaurants::all();
        $res = $restaurants->find($id);
        if(!$res){
            return response()->json([
                'content' => 'Restaurant not found'
            ], 200);
        }
        $res->delete();
        return response()->json([
            'content' => 'Delete Restaurant Successfully'
        ], 200);
    }
}
