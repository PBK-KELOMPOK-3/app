const soal_bio_7 = [
    {
        word:"Taksonomi",
        hint:"Klasifikasi mengenai makhluk hidup, dipelajari dalam cabang ilmu biologi…"
    },
    {
        hint:"ini soal kelas 7"
    },
    {
        hint:"Tanpa adanya sel darah ialah..",
        word:"Trombosit"
    },
    {
        hint:"Jaringan daun yang dilakukan oleh fotosintesis ialah…",
        word:"Mesofil"
    },
    {
        hint:"Mikroskop yang memiliki fungsi sebagai pemfokus suatu cahaya ke obyek ialah…",
        word:"Kondensor"
    },
    {
        hint:"Fotosintesis membutuhkan gas karbondioksida atau CO2 yang diambil dari udara melalui...",
        word:"Stomata"
    },
    {
        hint:"Kesatuan struktural dan fungsional terkecil dari makhluk hidup disebut…",
        word:"Sel"
    },
    {
        hint:"Gen yang merupakan faktor keturunan ditemukan di kromosom, sementara kromosom ditemukan di…",
        word:"Nukleus"
    },
    {
        hint:"Sekumpulan semut di dalam lubang tanah membentuk…",
        word:"Populasi"
    },
    {
        hint:"Tanaman paku tanduk rusa yang menempel pada pohon-pohon sebagai tempat hidupnya disebut simbiosis…",
        word:"Parasitisme"
    },
    {
        hint:"Larutan iodium dapat membentuk hasil fotosintesis yang berbentuk...",
        word:"Amilium"
    },

];

const soal_bio_8 = [
    {
        hint:"ini soal kelas 8"
    },
    {
        hint:"Proses pengeluaran zat sisa metabolisme yang tidak berguna bagi tubuh dari sel-sel tubuh disebut system?",
        word:"Eksresi"
    },
    {
        hint:"Osmoregulasi merupakan fungsi lain dari sistem ekskresi dalam membantu memelihara keseimbangan?",
        word:"air"
    },
    {
        hint:"Nutrisi yang dapat menghasilkan energi terbaik dan tercepat adalah?",
        word:"Karbohidrat"
    },
    {
        hint:"Jaringan yang mengangkut air dari akar ke daun?",
        word:"Floem"
    },
    {
        hint:"Sel-sel pembentuk tulang keras disebut ?",
        word:"Osteoblas"
    },
    {
        hint:"Sendi yang terlibat dalam hubungan antara tulang lengan atas dan gelang bahu adalah ?",
        word:"Sendi Peluru"
    },
    {
        hint:"Kelainan genetik dimana tubuh memproduksi hemoglobin dengan bentuk abnormal adalah?",
        word:"Talasemia"
    },
    {
        hint:"Sekumpulan sel yang memiliki bentuk dan fungsi yang sama disebut?",
        word:"Jaringan"
    },
    {
        hint:"Organ yg berfunsi untuk memonpa darah adalah?",
        word:"Jantung"
    },
    {
        hint:"Proses fotosintesis berlangsung pada daun di jaringan?",
        word:"Palisade"
    },
    
];


const soal_bio_9 = [
    {
        hint:"ini soal kelas 9"
    },
    {
        hint:"Ginjal menyaring zat sisa yg berupa ureum dari dalam ?",
        word:"Darah"
    },
    {
        hint:"Organ-organ yang bertanggung word untuk penanganan zat beracun yang masuk ke dalam tubuh ?",
        word:"Hati"
    },
    {
        hint:"Bagian dari sel-sel saraf yang memberikan impuls ke sel tubuh ?",
        word:"Dendrit"
    },
    {
        hint:"Sel telur melebur dengan sperma akan membentuk?",
        word:"Zigot"
    },
    {
        hint:"Zat ekskresi hati adalah?",
        word:"Amonia"
    },
    {
        hint:"Sifat turunan yang bisa diamati dengan mata adalah sifat?",
        word:"Fenotip"
    },
    {
        hint:"Penyakit menular seksual yang disebabkan oleh virus adalah?",
        word:"Sifilis"
    },
    {
        hint:"DNA di dalam sel terletak pada?",
        word:"Nukleus"
    },
    {
        hint:"Peristiwa jatuhnya serbuk sari di kepala putik yang berasal dari bunga lain dalam satu tanaman disebut?",
        word:"Geitogami"
    },
    {
        hint:"Zat yang tidak dipengaruhi faktor keturunan pada makhluk hidup adalah?",
        word:"Kromosom"
    }
];
const words =[];

let radioBtns = document.querySelectorAll("input[name='flexRadioDefault']");

let findSelected = () => {
        if(document.querySelector('input[id=bio_7]:checked')){
            words.length = 0;
            Array.prototype.push.apply(words, soal_bio_7);
            console.log(words);
        };

        if(document.querySelector('input[id=bio_8]:checked')){
            words.length = 0;
            Array.prototype.push.apply(words, soal_bio_8);
            console.log(words);
        };

        if(document.querySelector('input[id=bio_9]:checked')){
            words.length = 0;
            Array.prototype.push.apply(words, soal_bio_9);
            console.log(words);
        };
    };
    
    radioBtns.forEach(radioBtn =>{
        radioBtn.addEventListener("change",findSelected);
    });

findSelected();