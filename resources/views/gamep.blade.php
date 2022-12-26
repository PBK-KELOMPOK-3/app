<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCIENCEFUNQ | {{ $title }}</title>
    <link rel="stylesheet" href="css/game.css">

</head>

<body>
    <div class="contaner">
        <div class="content">
            <div class="navbar">

            </div>
            <div class="container inline">
                <p>{{ auth()->user()->name }}</p>
                <p>point anda: <span id="score">0</span> </p>
            </div>
        </div>

        <h2> SCIENCEFUNQ | Word Scramble Game</h2>
        <div class="content">
            <p class="word"></p>
            <div class="details">
                <p class="hint">Hint: <span></span></p>
                <p class="time">Time Left: <span><b>30</b>s</span></p>
            </div>
            <input type="text" placeholder="Enter a valide word">
            <div class="button">
                <button class="refresh-word">Skip Word</button>
                <button class="check-word">Check Word</button>
            </div>
        </div>

    </div>


    <script src="js/words.js"></script>
    <script src="js/script.js"></script>
</body>

</html>