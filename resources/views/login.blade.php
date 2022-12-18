@extends('layouts.main')

@section('container')

<main>
  <div class="layer1 container-fluid ">
    <div id="content">



      <div class="container-fluid">

        @if(session()->has('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          {{ session('success') }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif

        @if(session()->has('loginError'))
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ session('loginError') }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        @endif


        <div class="desk1">
          <img src="img/logo.png" alt="" width="30%">
        </div>
        <div class="desk2">
          <p>Selamat datang di BioFunQ (Biology Fun Quizee) aplikasi pembelejaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
        </div>
        <div class="desk3">
          <h2>Login</h2>
          <form action="/login" method="post">
            @csrf
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              @error('username')
              <div class="invalid-feedback">
                {{ $message }}
              </div>
              @enderror
              <input type="email" name="email" class="form-control @error('email') is-invalide @enderror" id="email" autofocus required value="{{ old('email') }}">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" id="password" required>
            </div>
            <button type="submit" class=" btn btn-primary mb-3">login</button>
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