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
                    <h2>Registration</h2>
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input for="name" type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input for="username" type="text" class="form-control" id="username">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
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
                    <small class="d-block text-center ">Not Registered? <a href="register">Registration Now!</a></small>
                </div>
            </div>
        </div>
    </div>

</main>

@endsection