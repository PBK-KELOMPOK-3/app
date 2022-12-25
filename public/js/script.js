const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
scoreOutput = document.getElementById("score"),
checkBtn = document.querySelector(".check-word");


let correctWord, timer;
let countSoal = 0;
let score = 0;

// let radioBtns = document.querySelectorAll("input[name='flexRadioDefault']");

let findSelected = () => {
    // if(document.querySelector('input[id=bio_7]:checked')){
    //     words.length = 0;
    //     Array.prototype.push.apply(words, soal_bio_7);
    //     console.log(words);
    // };

    // if(document.querySelector('input[id=bio_8]:checked')){
    //     words.length = 0;
    //     Array.prototype.push.apply(words, soal_bio_8);
    //     console.log(words);
    // };

    // if(document.querySelector('input[id=bio_9]:checked')){
    //     words.length = 0;
    //     Array.prototype.push.apply(words, soal_bio_9);
    //     console.log(words);
    // };
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('soal');
    return myParam
};

// radioBtns.forEach(radioBtn =>{
//     radioBtn.addEventListener("change",findSelected);
// });

const getWords = () => {
    const codeSoal = findSelected();
    if (codeSoal == "bio_7"){
        return soal_bio_7
    }else if (codeSoal == "bio_8"){
        return soal_bio_8
    }else if(codeSoal == "bio_9"){
        return soal_bio_9
    }else {
        alert("code soal tidak valid")
        window.location.href = '/bgame'
    }
}

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(()=>{
        if (maxTime > 0 ){
            maxTime--;
            return timeText.innerText = maxTime

        }
        clearInterval(timer);
        alert(`waktu habis! ${correctWord.toUpperCase()} adalah kata yang benar`)
        initGame();
    }, 1000);
}

const initGame  = () => {
    if (countSoal >= 10){
        alert(`permainan selesai score anda: ${score*10}`)
        window.location.href = '/bgame'
        return 
    }
    countSoal++
    initTimer(30);
    let words = getWords();
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] =  [wordArray[j], wordArray[i]];
    }

    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
   
}
initGame();

const checkword = () => {
    let userWord = inputField.value.toLocaleLowerCase();

    if (!userWord) return alert("tolong masukan kata")

    if (userWord !== correctWord) return alert(`maaf kata ${userWord} kurang tepat`);

    alert(`Selamat!! ${userWord.toUpperCase()} adalah jawaban benar`);
    score += 1; 

    updateScore();
    initGame();
}


function updateScore() {
    scoreOutput.innerHTML = score;
}


refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkword);