@extends('layouts.main')

@section('container')
<header>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="home">BioFunQ</a>
  </nav>
</header>
<main>
  <div class="layer1 container-fluid">
    <div id="content">
      <div class="container-fluid">
        <div class="desk1">
          <img src="/img/logo.png" alt="" width="30%">
        </div>

        <div class="desk2">
          <p>Selamat datang di BioFunQ (Biology Fun Quizee) aplikasi pembelejaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
        </div>

        <div class="desk3">
          <h2>Pilih Tingkat kesulitan Game</h2>
          <hr>
          <div class="container">
            <h5>Jenis game:</h5>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Biologi
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Kimia
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Fisika
              </label>
            </div>
          </div>
          <hr>
          <div class="container">
            <h5>Tingkat kesulitan: </h5>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Mudah
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Sedang
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Sulit
              </label>
            </div>
          </div>
          <hr>
          <div class="container">
            <div class="d-grid gap-2 d-md-block">
              <a href="/gamep"><button type="button" class="btn btn-primary">Mulai</button></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</main>

@endsection