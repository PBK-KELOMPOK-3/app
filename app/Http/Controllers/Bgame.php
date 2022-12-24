<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Bgame extends Controller
{
    public function index()
    {
        return view('bgame', [
            "title" => "difficulty"
        ]);
    }
}
