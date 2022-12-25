const words = [];

const soal_bio_7 = [
    {
        word:"Taksonomi",
        hint:"Klasifikasi mengenai makhluk hidup, dipelajari dalam cabang ilmu biologi…"
    },
    {
        hint:"Tanaman yang berbentuk dalam heterotropis disebut…",
        word:"Sabuk sari"
    },
    {
        hint:"Nama sel yang memiliki fungsi sebagai pernapasan sel…",
        word:"Mitokondria "
    },
    {
        hint:"Bagian sel yang dimiliki oleh sel hewan maupun sel tumbuhan adalah…",
        word:"Membran sel"
    },
    {
        hint:"Pembuluh darah yang mengangkut hasil dari proses fotosintesis disebut dengan…",
        word:"Floem"
    },
    {
        hint:"Jaringan pada tumbuhan yang terus menerus mengalami pembelahan…",
        word:"Jaringan meristem"
    },
    {
        hint:"Organel-organel yang berada di dalam satu cairan sel disebut dengan…",
        word:"Sitosol"
    },
    {
        hint:"Jaringan yang memiliki peran penting di dalam pengaturan gerak, baik dalam pengaturan gerak sadar, maupun gerak yang dilakukan secara tidak sadar…",
        word:"Jaringan saraf"
    },
    {
        hint:"Faktor yang mempengaruhi jalannya proses fotosintesis adalah…",
        word:"Suhu"
    },
    {
        hint:"Agar dapat  mempertahan suatu jenisnya, maka makhluk hidup itu seharusnya… ",
        word:"Berkembang biak"
    },
    {
        hint:"Data yang didapat dengan alat ukur disebut juga dengan data…",
        word:"Nominal"
    },
    {
        hint:"Organel yang menghasilkan energi ialah… ",
        word:"Golgi Kompleks"
    },
    {
        hint:"Sekelompok sel yang memiliki bentuk dan fungsi yang sama disebut juga dengan…",
        word:"Organisme"
    },
    {
        hint:"Sel yang mengandung sebagian besar dari mitokondria ialah…",
        word:"Sel tulang"
    },
    {
        hint:"Hormon androgen dan ektrogen mulai aktif selama…",
        word:"Anak – anak"
    },
    {
        hint:"Mampu menanggapi rangsang adalah salah satu ciri makhluk hidup yang dikenal dengan istilah…",
        word:"Iritabilitas"
    },
    {
        hint:"Bagian pada tumbuhan paku yang menghasilkan sel kelamin jantan yaitu…",
        word:"Antheredium"
    },
    {
        hint:"Euglena dimasukkan ke dalam kelompok Plantae karena…",
        word:"Autotrof"
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
    {
        hint:"Sekelompok sel yang memiliki bentuk dan fungsi yang sama disebut…",
        word:"Organisme"
    },
    {
        hint:"Sel yang dapat menghasilkan sebagian besar mitokondria disebut…",
        word:"Sel tulang"
    },
];

const soal_bio_8 = [
    {
        hint:"Pada masa pubertas, seorang wanita mengalami peluruhan endometrium yang terjadi secara siklus. Peristiwa ini disebut ?",
        word:"Menstruasi"
    },
    {
        hint:"Penyakit yang disebabkan oleh virus yang menyerang kelenjar air ludah sehingga menjadi bengkak disebut ?",
        word:"Parotitis"
    },
    {
        hint:"Sistem pencernaan yang melakukan gerak peristaltik pertama adalah ?",
        word:"Kerongkongan"
    },
    {
        hint:"Jenis sendi di rahang adalah...",
        word:"Sendi pelana"
    },
    {
        hint:"Pengambilan gas karbondioksida dari udara pada daun melalui ?",
        word:"Stomata"
    },
    {
        hint:"Reaksi fotolisis (pemecahan air) memerlukan energi cahaya matahari sehingga disebut reaksi ?",
        word:"Reaksi terang"
    },
    {
        hint:"Organisme yang dapat membentuk makanan sendiri disebut ?",
        word:"Autotrof"
    },

    {
        hint:"Proses fotosintesis menghasilkan gas ?",
        word:"Oksigen"
    },
    {
        hint:"Penyakit yang berkaitan dengan sukarnya darah membeku saat luka, adalah ?",
        word:"Hemofilia"
    },
    {
        hint:"Sistem peredaran yang mengalirkan darah dari jantung ke paru disebut perdaran darah ?",
        word:"Kecil"
    },
    {
        hint:"Bagian sel darah yang berfungsi dalam proses pembekuan darah saat luka adalah ?",
        word:"Keping darah"
    },
    {
        hint:"Golongan darah manusia pada system ABO yang disebut sebagai resipien universal adalah ? ",
        word:"AB"
    },
    {
        hint:"Bagian dari jantung yang berfungsi untuk menjaga darah dari bilik kanan tidak kembali ke serambi kanan disebut?",
        word:"Katup trikuspidals"
    },
    {
        hint:"Berikut ini pembuluh darah yang mengangkut darah dari jantung bagian bilik kanan menuju paru paru adalah ?",
        word:"Arteri pulmonalis"
    },
    {
        hint:"Sita mengalami gangguan kesehatan dengan gejala tubuh lemas, mudah lelah,dan tampak pucat. Gejala tersebut menunjukkan bahwa Sita menderita ?",
        word:"Anemia"
    },
    {
        hint:"Alat transportasi pada tubuh hewan adalah darah, sedangkan pada tumbuhan peran ini dilakukan oleh xilem dan?",
        word:"Floem"
    },
    {
        hint:"Enzim yang digunakan untuk membantu pencernaan kimia pada mulut dihasilkan oleh ? ",
        word:"Kelenjar ludah"
    },
    {
        hint:"Penyakit yang menyerang paru-paru disebabkan oleh bakteri Mycobacterium tuberculosis adalah ? ",
        word:"TBC"
    },
    {
        hint:"Roni mengamati pertumbuhan tinggi suatu tanaman. Di setiap harinya, Roni menemui bahwa tanaman seiring waktu batangnya bertambah tinggi. Berdasarkan pengamatan Roni diketahui bahwa tinggi tanaman tidak dapat kembali semula. Tinggi tanaman yang diamati Roni menunjukkan pertumbuhan bersifat ? ",
        word:"irreversible"
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
        hint:"Ginjal menyaring zat sisa yg berupa ureum dari dalam ?",
        word:"Darah"
    },
    {
        hint:"Organ-organ yang bertanggung word untuk penanganan zat beracun yang masuk ke dalam tubuh ?",
        word:"Hati"
    }, 
    {
        hint:"Bagian ginjal yang menyaring darah berada di ? ",
        word:"Tubulus kontraktil"
    },
    {
        hint:"Bagian dari sel-sel saraf yang memberikan impuls ke sel tubuh ?",
        word:"Dendrit"
    },
    {
        hint:"Sistem saraf pusat terdiri dari sumsum tulang belakang dan ? ",
        word:"Otak"
    },
    {
        hint:"alat reproduksi laki laki yang berfungsi sebagai tempat penyimpanan sperma sebelum dikeluarkan melalui penis",
        word:"Testis"
    },
    {
        hint:"Sel telur melebur dengan sperma akan membentuk?",
        word:"Zigot"
    },
    {
        hint:"Genotipe terdiri dari fitur dominan hanya (AA) atau hanya resesif (aa) berarti",
        word:"Homozigot"
    },
    {
        hint:"Persilangan antara dua individu dengan karakteristik tertentu disebut.?",
        word:"Monohibrid"
    },
    {
        hint:"Warna kekuningan urin disebabkan oleh adanya zat-zat tertentu dalam urin.? ",
        word:"Urobilin"
    },
    {
        hint:"Zat ekskresi hati adalah?",
        word:"Amonia"
    },
    {
        hint:"Penggunaan bahan kimia yang menyebabkan efek samping meliputi: Kerusakan fungsi organ yang menyebabkan kecanduan, menghilangkan kesadaran bahan kimia yang memiliki efek samping.?",
        word:"Narkotika"
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
        hint:" Berikut ini mikroba yang banyak di manfaatkan dalam perbuatan keju adalah ? ",
        word:"Lactobacillus lactis"
    },

    {
        hint:"DNA di dalam sel terletak pada?",
        word:"Nukleus"
    },
    {
        hint:"Materi genetik yang mengontrol sifat pada manusia adalah ?",
        word:"Gen"
    },
    {
        hint:"Sifat atau ciri yang selalu muncul pada suatu keturunan sehingga mengalahkan sifat yang lain dinamakan ? ",
        word:"Dominan"
    },
    {
        hint:"sepasang gen yang letaknya bersesuaian pada kromosom homolog, seperti Rr dan Bb adalah ?",
        word:"Alel"
    },
 {
        hint:"Tempat terjadinya proses peleburan dua gamet yang menghasilkan satu sel tunggal berupa zigot adalah ?",
        word:"Tuba fallopi"
    },
    {
        hint:"Tina mengalami suatu penyakit dengan gejala demam, sakit kepala, kelelahan, nyeri otot, kehilangan berat badan dan pembengkakan kelenjar getah bening di tenggorokan. Dokter menduga penyakit yang diderita oleh Tina diakibatkan oleh virus. Oleh karena itu, dokter menyarankan Tina untuk melakukan tes darah. Hasil diagnosis penyakit yang tepat sesuai dengan informasi di atas adalah ?",
        word:"AIDS"
    },
    {
        hint:"Kelebihan hormone, vitamin, dan obat-obatan dapat dikeluarkan melalui ? ",
        word:"Ginjal"
    },
    {
        hint:"Perkembangbiakan yang menghasilkan sifat anak sama dengan sifat induknya adalah ? ",
        word:"Vegetatif"
    },
    {
        hint:"Seekor lebah betina dapat menghasilkan anak tanpa adanya lebah jantan. Perkembangbiakan tersebut dinamakan ?",
        word:"Parogenesis"
    },
    {
        hint:"Jika lensa mata seseorang terlalu cembung, sehingga bayangan benda jatuh di depan maka akan mengalami gangguan penglihatan yang disebut ?",
        word:"Miopi"
    },
    {
        hint:"Proses meluruhnya sel-sel epitel yang menyusun dinding rahim disebut ",
        word:"Menstruasi"
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

const soal_kimia_7 =[
    {
        hint:"Zat yang memiliki susunan dan komposisi yang tetap adalah zat ?",
        word:"Campuran"
    },
    {
        hint:"Zat yang sudah tidak bisa diuraikan lagi dengan reaksi kimia sederhana disebut . . . ",
        word:"Unsur"
    },
    {
        hint:"Materi yang komposisi zat penyusunnya dapat berubah – ubah adalah  . . . .",
        word:"Campuran"
    },
    {
        hint:"Unsur yang paling banyak terdapat di alam semesta adalah  . . . .",
        word:"Hidrogen"
    },
    {
        hint:"Berdasarkan kelimpahannya, unsur yang paling banyak terdapat di kerak bumi, laut dan atmosfer adalah  . . . . ",
        word:"Oksigen"
    },
    {
        hint:"Tabel periodik unsur disusun berdasarkan kenaikan nomor atom. Tabel periodik seperti ini diusulkan oleh . . . .",
        word:"Henry Moseley"
    },
    {
        hint:"Campuran antara logam besi, nikel dan kromium akan menghasilkan  . . . . ",
        word:"Baja"
    },
    {
        hint:"Air Laut, Susu dan santan merupakan zat ? ",
        word:"Campuran"
    },
    {
        hint:"Santan termasuk campuran jenis . . . ",
        word:"Koloid"
    },
    {
        hint:"Campuran yang antara pelarut dan zat terlarut tidak bisa dibedakan lagi adalah  . . . ",
        word:"Larutan"
    },
    {
        hint:"Kopi merupakan campuran yang termasuk ke dalam suspensi ?",
        word:"Kasar"
    },
    {
        hint:"kapur barus menjadi gas merupakan contoh peristiwa ? ",
        word:"Menyublim"
    },
    {
        hint:"Gas yang menyebabkan karat pada besi adalah ?",
        word:"Oksigen"
    },
    {
        hint:"Yang bukan merupakan perubahan kimia adalah ?",
        word:"Mencair"
    },
    {
        hint:"Perubahan gas menjadi padat dinamakan ?",
        word:"Deposisi"
    },
    {
        hint:"Pada saat pagi hari udara terasa dingin dan rumput basah padahal tidak terjadi hujan, hal ini dikarenakan adanya proses perubahan yang dinamakan ?",
        word:"Mengembun"
    },
    {
        hint:"Perubahan es menjadi cair dinamakan ?",
        word:"Mencair"
    },
    {
        hint:"Ca, merupakan lambang dari unsur ?",
        word:"Kalsium"
    },
    {
        hint:"Ni, merupakan lambang dari unsur ?",
        word:"Nikel"
    },
    {
        hint:"Sn, merupakan lambang dari unsur ?",
        word:"Timah"
    },
    {
        hint:"Sifat pengantar listrik dengan baik dimiliki oleh unsur ?",
        word:"Logam"
    },
    {
        hint:"NaCl dapat disebut juga sebagai ?",
        word:"Garam"
    },
    {
        hint:"H2O, merupakan jenis molekul ?",
        word:"Air"
    },
    {
        hint:"Campuran yang tidak dapat dibedakan antara pelarut dengan zat terlarutnya disebut ? ",
        word:"Koloid"
    },
    {
        hint:"Air,Gula dan garam termasuk dalam golongan ? ",
        word:"Senyawa"
    },
    {
        hint:"Air sungai merupakan jenis larutan ?",
        word:"Campuran"
    },
    {
        hint:"Hg merupakan lambang dari unsur ?",
        word:"Raksa"
    },
    {
        hint:"Cu merupakan lambang dari unsur ?",
        word:"Tembaga"
    },
    {
        hint:"Silikon merupakan unsur ?",
        word:"Metaloid"
    },
    {
        hint:"Unsur yang ditambahkan pada pasta gigi untuk mencegah gigi berlubang adalah ? ",
        word:"Flourin"
    }
];