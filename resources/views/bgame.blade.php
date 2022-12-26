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
          <p>Selamat datang di SCIENCEFUNQ (Science Fun Quizee) aplikasi pembelejaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
        </div>

        <div class="desk3">


          <h2>Pilih Tingkat kesulitan Game</h2>
          <hr>

          <form class="container" action="/gamep">
            <h5>Tingkat kesulitan: </h5>
            <fieldset>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="bio_7" value="bio_7" checked>
                <label class="form-check-label" for="flexRadioDefault1">
                  Biologi (Kelas 7)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="bio_8" value="bio_8">
                <label class="form-check-label" for="flexRadioDefault2">
                  Biologi (Kelas 8)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="bio_9" value="bio_9">
                <label class="form-check-label" for="flexRadioDefault1">
                  Biologi (Kelas 9)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="kim_7" value="kim_7">
                <label class="form-check-label" for="flexRadioDefault1">
                  Kimia (Kelas 7)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="kim_8" value="kim_8">
                <label class="form-check-label" for="flexRadioDefault2">
                  Kimia (Kelas 8)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="kim_9" value="kim_9">
                <label class="form-check-label" for="flexRadioDefault1">
                  Kimia (Kelas 9)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="fis_7" value="fis_7">
                <label class="form-check-label" for="flexRadioDefault1">
                  Fisika (Kelas 7)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="fis_8" value="fis_8">
                <label class="form-check-label" for="flexRadioDefault2">
                  Fisika (Kelas 8)
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="soal" id="fis_9" value="fis_9">
                <label class="form-check-label" for="flexRadioDefault1">
                  Fisika (Kelas 9)
                </label>
              </div>
            </fieldset>

            <hr>
            <div class="container">
              <div class="d-grid d-md-block">
                <button type="button" class="btn btn-primary"><input style="background: transparent; height: 100%; width: 100%; border:none; color:aliceblue" type="submit" value="Mulai"></button>
              </div>
            </div>
          </form>

        </div>



        <script src="js/words.js"></script>

      </div>

    </div>
  </div>
  </div>

</main>

@endsection