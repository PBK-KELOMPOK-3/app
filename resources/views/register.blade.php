@extends('layouts.main')

@section('container')

<main>
    <div class="layer1 container-fluid">
        <div id="content">
            <div class="container-fluid">
                <div class="desk1">
                    <img src="img/logo.png" alt="" width="30%">
                </div>
                <div class="desk2">
                    <p>Selamat datang di BioFunQ (Biology Fun Quizee) aplikasi pembelejaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
                </div>
                <div class="desk3">
                    <h2>Registration form</h2>
                    <form action="/register" method="post">
                        @csrf
                        <div class="mb-3">
                            <label for="name">Name</label>
                            @error('name')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" id="name" required value="{{ old('name') }}">
                        </div>
                        <div class="mb-3">
                            <label for="username">Username</label>
                            @error('username')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                            <input type="text" name="username" class="form-control @error('username') is-invalid @enderror" id="username" required value="{{ old('username') }}" \>
                        </div>
                        <div class="mb-3">
                            <label for="email">Email address</label>
                            @error('email')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                            <input type="email" name="email" class="form-control @error('email') is-invalid @enderror" id="email" required value="{{ old('email') }}">
                        </div>
                        <div class="mb-3">
                            <label for="password">Password</label>
                            @error('password')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" id="password" required>
                        </div>
                        <button type="submit" class=" btn btn-primary mb-3">Register</button>
                        <!-- <div class="mb-3">
                            <label class="form-check-label mb-3" for="exampleCheck1">Login dengan :</label>
                            <ul class="nav justify-content-start list-unstyled d-flex">
                                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="48" height="48">
                                            <use xlink:href="#google" />
                                        </svg></a></li>
                                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="48" height="48">
                                            <use xlink:href="#facebook" />
                                        </svg></a></li>
                            </ul>
                        </div> -->
                    </form>
                    <small class="d-block text-center ">Already Registered? <a href="login">Login</a></small>
                </div>
            </div>
        </div>
    </div>

</main>

@endsection