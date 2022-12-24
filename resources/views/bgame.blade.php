@extends('layouts.main')

@section('container')

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
            <h5>Tingkat kesulitan: </h5>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="bio_7">
              <label class="form-check-label" for="flexRadioDefault1">
                Mudah (Kelas 7)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="bio_8" checked>
              <label class="form-check-label" for="flexRadioDefault2">
                Sedang (Kelas 8)
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="bio_9">
              <label class="form-check-label" for="flexRadioDefault1">
                Sulit (Kelas 9)
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
        <script src="js/words.js"></script>
      </div>
    </div>
  </div>

</main>

@endsection