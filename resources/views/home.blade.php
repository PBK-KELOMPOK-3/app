@extends('layouts.main')

@section('container')
<header>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BioFunQ</a>
            <a href="login"><button type="button" class="btn btn-primary">Login</button>
        </div></a>

    </nav>
</header>
<main>
    <div class="layer1 container-fluid">
        <div id="content">
            <div class="container-fluid">
                <div class="desk1">
                    <img src="img/logo.png" alt="" width="30%">
                </div>
                <div class="desk2">
                    <p>Selamat datang di BioFunQ (Biology Fun Quizee) aplikasi pembelejaran interaktif berbasis website yang menyediakan berbagai macam game puzzel untuk mengasah pengetahuan mu seputar ilmu biologi. </p>
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
                                    <h4>step 1</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dicta assumenda, maiores ipsum enim tenetur hic quis unde consequatur pariatur veritatis! Quia sint voluptatum blanditiis, neque ab tenetur dolores dignissimos?</p>
                                    <p>Nam dolore tempore ab asperiores ipsam, sequi amet dignissimos excepturi quia vitae illum cumque deserunt reiciendis vel. Beatae harum rem velit asperiores temporibus voluptatum dolorum iste ipsam, itaque ullam voluptatem.</p>
                                    <hr>
                                    <h4>step 2</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quasi amet dolorem vitae magnam doloribus earum? Quaerat vitae, aut eius ullam rem aspernatur aliquid deleniti? Nobis rerum vel libero nisi?</p>
                                    <p>Velit blanditiis fugit cumque? Quam fuga distinctio amet quas quae, dolorum doloribus. Omnis repellendus nulla et dicta labore autem soluta ipsa, facilis blanditiis fuga sed explicabo cum expedita ex nihil?</p>
                                    <hr>
                                    <h4>step 3</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dicta assumenda, maiores ipsum enim tenetur hic quis unde consequatur pariatur veritatis! Quia sint voluptatum blanditiis, neque ab tenetur dolores dignissimos?</p>
                                    <p>Nam dolore tempore ab asperiores ipsam, sequi amet dignissimos excepturi quia vitae illum cumque deserunt reiciendis vel. Beatae harum rem velit asperiores temporibus voluptatum dolorum iste ipsam, itaque ullam voluptatem.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="desk3">
                    <p>Ayo Main!</p>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        </div>
                        <div class="carousel-inner ">
                            <div class="carousel-item active">
                                <img src="img/sw.png" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block ">
                                    <h5>WORD SCRAMBEL GAME</h5>
                                    <p>Some representative placeholder content for the first slide.</p>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="img/sw.png" class="d-block w-100" alt="...">
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
                    <div class=" d-grid gap-2 col-6 mx-auto">
                        <a class="btn btn-primary" href="bgame" role="button">Play Game</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>


@endsection