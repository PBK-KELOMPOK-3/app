@extends('layouts.main')

@section('container')
<header>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BioFunQ</a>
            <a href="login"><button type="button" class="btn btn-primary">Login</button></a>
        </div>

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
                    <p>Selamat datang di BioFunQ (Biology Fun Quizee) aplikasi pembelajaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Cara Main
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cara Main</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h4>Step 1</h4>
                                    <p>Untuk bermain dalam website BIOFUNQ, hal pertama yang harus dilakukan adalah memiliki sebuah akun jika anda belum meiliki sebuah akun maka anda dapat membuat akun dengan cara mengklik tombol login pada bagian pojok kanan atas.</p>
                                    <p>Setelah di klik maka anda akan langsung disuruh untuk melakukan login, Kita lewatkan saja bagian login ini dan langsung mengarah ke bagian bawah. Dalam website BIOFUNQ kami menerima 2 metode pendaftaran, yaitu Google dan Facebook</p>
                                    <p>Pilihlah salah satu metode pendaftaran untuk mendafarkan diri anda dalam website BIOFUNQ. Dan bagi kalian yang sudah memiliki sebuah akun maka kalian langsung dapat melakukan login dengan cara yang sama.</p>
                                    <hr>
                                    <h4>Step 2</h4>
                                    <p>Jika sudah melakukan registrasi dan login, selanjutnya kalian dapat memilih permainan yang ingin kalian mainkan di website ini kami dalam website ini kami menyediakan dua buah permainan, yaitu word scramble dan Teka Teki Silang.</p>
                                    <p>Jika kalian telah memilih gamenya kalian dapat memilih tingkat kesulitan, dalam hal ini kami menulis tingkat kesulitan dan juga kelas.</p>
                                    <hr>
                                    <h4>Step 3</h4>
                                    <p>Jika kalian sudah memilih tingkat kesulitan maka kalian sudah dapat memainkan permainan dengan cara meng klik tombol mulai bermain.</p>
                                    <p>Jika kalian telah menyelesaikan permainannya maka nilai atau score kalian langsung akan ditampilkan diakhir layar. Selamat Bermain dan Semoga Menyenangkan :).</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="desk3">
                    <p>Mari Bermain !</p>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        </div>
                        <div class="carousel-inner ">
                            <div class="carousel-item active">
                                <img src="/img/sw.png" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block ">
                                    <h5>WORD SCRAMBEL GAME</h5>
                                    <p>Some representative placeholder content for the first slide.</p>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/img/sw.png" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>TEKA - TEKI SILANG</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <hr>
                    <div class=" d-grid gap-2 col-6 mx-auto">
                        <a class="btn btn-primary" href="/bgame" role="button">Play Game</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>


@endsection