<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashbioardController extends Controller
{
    public function index()
    {
        return view('dashboard');
    }
}
