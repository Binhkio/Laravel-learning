<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    //
    public function __construct(){
        
    }

    //  Show categories (GET)
    public function index(){
        
    }
    
    //  Get categories (GET)
    public function getCategories($id){
        
    }

    //  Show form add categories (GET)
    public function addCategories(){
        return view('clients/categories/add');
    }
    
    //  Add categories (POST)
    public function handleAddCategories(){
        return redirect(route('categories.add'));
    }

    //  Update categories (POST)
    public function updateCategories($id){

    }

    //  Delete categories (DELETE method)
    public function deleteCategories($id){

    }

}
