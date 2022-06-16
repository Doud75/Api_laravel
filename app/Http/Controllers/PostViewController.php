<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostViewController extends Controller
{
    public function index()
    {
        return view('articles');
    }

    public function show($id)
    {
        return view("article");
    }

    public function create()
    {
        return view('form');
    }

    public function file()
    {
        return view('file');
    }
}
