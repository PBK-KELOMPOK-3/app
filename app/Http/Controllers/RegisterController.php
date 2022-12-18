<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class RegisterController extends Controller
{
    public function creat()
    {
        return view('register', [
            'title' => 'Register'
        ]);
    }

    public function store(Request $request)
    {
        // membuat validsi data atau aturan pada data
        $validateData = $request->validate([
            'name' => ['required', 'max:255'],
            'username' => ['required', 'min:3', 'max:255', 'unique:users'],
            'email' => ['required', 'email:dns', 'unique:users'],
            'password' => ['required', 'min:5', 'max:255']
        ]);

        // mengenkripsi password agar tidak terlihat didalam database
        // $validateData['password'] = bcrypt($validateData['password']); 
        $validateData['password'] = Hash::make($validateData['password']);

        User::create($validateData);

        // $request->session()->flash('status', 'Task was successful!');
        // method flash di atas undifined tidak bisa dipakai di laravel 9

        // diberi perubah seperti dibawah 
        // session()->flash('success', 'Registration successful! please login');
         
        // membuka halaman login dan memberitahu bahwa registrasi berhasil
        return redirect('/login')->with('success', 'Registration successful! please login');
    }
}
