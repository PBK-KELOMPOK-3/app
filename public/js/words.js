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

const soal_kim_7 =[
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

const soal_kim_8 =[
    {
        hint:"Arah akar menembus tanah disebut gerak ?",
        word:"Geotropisme"
    },
    {
        hint:"Gerak yang tidak disebabkan rangsang dari luar disebut gerak …. ",
        word:"Endonom"
    },
    {
        hint:"Hewan ini termasuk hama ?",
        word:"Wereng"
    },
    {
        hint:"Untuk membasmi tikus bahan kimia yang digunakan adalah ?",
        word:"Rodentisida"
    },
    {
        hint:"Proton dan neutron menentukan massa dari suatu ?",
        word:"Atom"
    },
    {
        hint:"Atom atau Kumpulan atom yang bermuatan listrik disebut ?",
        word:"Proton"
    },
    {
        hint:"Pergiliran keturunan yang melibatkan fase gametofit dan sporofit pada tumbuhan lumut disebut ?",
        word:"Metagenesis"
    },
    {
        hint:"Faktor internal yang mempengaruhi pertumbuhan dan perkebangan makhluk hidup adalah ?",
        word:"Gen"
    },
    {
        hint:"Tahapan ini tidak dialami oleh metamorfosis tidak sempurna",
        word:"Pupa"
    },
    {
        hint:"Telur – Larva – Pupa – Imago merupakan tahap metaformosis hewan ?",
        word:"Kupu Kupu"
    },
    {
        hint:"Kebutuhan nutrisi selama masa perkembangan embrio di dalam janin diperoleh melalui ?",
        word:"Plasenta"
    },
    {
        hint:"Bagian dari rahim yang befungsi menyalurkan makanan ke rahim",
        word:"Plasenta"
    },
    {
        hint:"Hewan ini memiliki rangka eksoskeleton",
        word:"Udang"
    },
    {
        hint:"Tulang yang dimiliki oleh hidung dan daun telinga ",
        word:"Tulang Rawan"
    },
    {
        hint:"Kandungan bahan kimia yang terdapat di dalam sabun",
        word:"Natrium Palmitat"
    },
    {
        hint:"Natrium hipoklorit digunakan sebagai bahan...",
        word:"Pemutih"
    },
    {
        hint:"Aroma pisang dapat ditimbulkan dari bahan kimia ",
        word:"Isoamil Asetat"
    },
    {
        hint:"Disebut sebagai bahan pembasmi serangga",
        word:"Insektisida"
    },
    {
        hint:"Zat aditif yang terdapat didalam rokok",
        word:"Nikotin"
    },
    {
        hint:"Pemberi warna kuning pada makanan",
        word:"Tartrazin"
    },
    {
        hint:"Zat yang termasuk dalam psikotropika",
        word:"Amfetamin"
    },
    {
        hint:"Sebagai bahan pengawet daging",
        word:"Natrium Nitrit"
    },
    {
        hint:"Tenakan darah menjadi rendah merupakan penyalah gunaan dari ",
        word:"Heroin"
    },
    {
        hint:"Amfetamin digunakan untuk pengobatan",
        word:"Parkinson"
    },
    {
        hint:"Cresol merupakan bahan kimia yang bersifat",
        word:"Karsinogenik"
    },
    {
        hint:"Zat beracun dan merusak kulit",
        word:"Fenol"
    },
    {
        hint:"Zat adiktif yang digunakan untuk kemoterapi pada pasien kanker",
        word:"Ganja"
    },
    {
        hint:"Bahan kimia untuk menteralkan asam lambung termasuk kategori ",
        word:"Antacid"
    },
    {
        hint:"Daun jati dimanfaatkan untuk pewarna makanan berwarna",
        word:"Merah"
    },
    {
        hint:"Kandungan kimia dalam sabun mandi",
        word:"Gliserin"
    }
];

const soal_kim_9 =[
    {
        hint:"Hg, Ag, Pb, Au termasuk ke dalam golongan",
        word:"Unsur"
    },
    {
        hint:"H, Li, Uuh termasuk ke dalam golongan",
        word:"Senyawa"
    },
    {
        hint:"Senyawa yang tersusun oleh unsur sendirinya",
        word:"Monoatomik"
    },
    {
        hint:"Es krim, Kabut dan asap termasuk dalam",
        word:"Koloid"
    },
    {
        hint:"Gerak acak partikel koloid",
        word:"Gerak Brown"
    },
    {
        hint:"Pengendapan partikel partikel koloid sehingga fase terdispersinya terpisah dari medium pendispensersinya ",
        word:"Koagulasi"
    },
    {
        hint:"Zat campuran yang terlihat serbasama, tidak keruh dan tidak ada endapan ",
        word:"Larutan"
    },
    {
        hint:"Proses penjernihan air dengan menggunakan tawas ",
        word:"Adsorpsi"
    },
    {
        hint:"Zat yang digunakan sebagai koloid pelindung pada es krim",
        word:"Gelatin"
    },
    {
        hint:"Proses pencucian darah dengan sifat koloid",
        word:"Dialisis"
    },
    {
        hint:"Sorot lampu mobil di jalan yan berkabut dan berasap merupakan efek ",
        word:"Tyndall"
    },
    {
        hint:"Salah satu logam berbentuk cair",
        word:"Merkuri"
    },
    {
        hint:"Argon termasuk dalam golongan",
        word:"Gas Mulia"
    },
    {
        hint:"Berasa pahit dan memiliki ph lebih dari 7",
        word:"Basa"
    },
    {
        hint:"Mempunyai 4 elektron valensi yang mampu membentuk ikatan kovalen yang kuat",
        word:"Karbon"
    },
    {
        hint:"CH4 dan C2H4 Termasuk golongan senyawa",
        word:"Hidrokarbon"
    },
    {
        hint:"C2H6 , C5H12, C7H16 Merupakan",
        word:"Alkana"
    },
    {
        hint:"Menghasilkan zat yang sama jika terbakar sempurna dalam oksigen",
        word:"Isomer"
    },
    {
        hint:"Rumus kimia CH4 adalah",
        word:"Metana"
    },
    {
        hint:"Gas berbahaya yang dihasilkan akibat pembakaran tidak sempurna dari minyak bumi ",
        word:"Karbon monoksida"
    },
    {
        hint:"Semakin tinggi, laju reaksi semakin cepat merupakan pengaruh dari",
        word:"Suhu"
    },
    {
        hint:"Cabang ilmu kimia yang berperan untuk mempelajari sifat fisis",
        word:"Kimia Fisika"
    },
    {
        hint:"Sifat yang mampu mengikis kotoran, jarigan , tumbuhan , jaringan hewan, jaringan manusia, maupun logam",
        word:"Korosifitas"
    },
    {
        hint:"Kemampuan suatu bahan untuk mempertahankan diri dari perubahan atau dekomposisi ketika terkena udara, panas, cahaya atau reaksi kimia lainnya ",
        word:"Kestabilan"
    },
    {
        hint:"H2SO4 Merupakan elektrolit",
        word:"Kuat"
    },
    {
        hint:"AICI3 Termasuk dalam bentuk",
        word:"Senyawa"
    },
    {
        hint:"Pembunuh kuman yang terdapat pada pembersih lantai termasuk ke dalam senyawa ",
        word:"Karbol"
    },
    {
        hint:"Bahan bahan kimia alami",
        word:"Gula"
    },
    {
        hint:"Sifat sabun dan deterjen yan dapat melarutkan lemak dan minyak ",
        word:"Hidrofilik"
    },
    {
        hint:"Pestisida untuk membasmi rumput perkebunan",
        word:"Herbisida"
    }
];

const soal_fis_9=[
    {
        hint:"Jenis listrik yang tidak mengalir dan disebabkan gesekan atau gosokan dua buah benda dengan muatan listrik yang berbeda.",
        word:"Statis"
    },
    {
        hint:"Berikut adalah jalannya impuls dari gerak sadar. Isilah titik titk.eseptor >> neuron sensorik >> otak >> neuron motorik>>….",
        word:"Efektor"
    },
    {
        hint:"Berikut adalah jalannya impuls dari gerak reflek. Isilah titik titk.Impuls dari reseptor >> neuron sensorik >> neuron ….. >> sumsum tulang belakang >> neuron motorik >> efektor",
        word:"Konektor"
    },
    {
        hint:"Muatan atom yang terletak pada kulit atom.",
        word:"Elektron"
    },
    {
        hint:"Ketika kaca digosok dengan kain sutra, elektron dari batang kaca bermigrasi ke kain sutra sehingga batang kaca bermuatan…",
        word:"Positif"
    },
    {
        hint:"Rumus arus listrik (hukum ohm)",
        word:"V=I.R"
    },
    {
        hint:"“Interaksi muatan listrik yang sejenis akan tolak-menolak, sedangkan muatan yang berlainan jenis akan tarik-menarik” merupakan pengertian dari hukum …",
        word:"Coulomb"
    },
    {
        hint:"Pada rangkaian seri diketahui R1 = 82 ohm, R2=99 ohm dan R3= 67 ohm. Nilai resistor penggantinya adalah …. ohm",
        word:"248"
    },
    {
        hint:"Pada rangkaian paralel diketahui R1 = 7 ohm dan R2= 2 ohm. Nilai resistor penggantinya adalah …. ohm",
        word:"14/9"
    },
    {
        hint:"Teknik untuk melapisi satu logam dengan logam lainnya untuk menghasilkan logam dengan kualitas yang lebih baik",
        word:"Electroplating"
    },
    {
        hint:"Sebuah tempat laundry menyalakan 5 mesin cuci 210 watt selama 7 jam. Berapa kWh energi yang dipakai dalam sehari? ….kWh.",
        word:"7350"
    },
    {
        hint:"Jenis rangkaian listrik yang hambatannya disusun secara bertingkat atau bercabang.",
        word:"Paralel"
    },
    {
        hint:"Teknik pembuatan magnet dengan mendekatkan benda bermuatan listrik ke benda yang tidak bermuatan listrik.",
        word:"Konduksi "
    },
    {
        hint:"Gaya yang timbul karena adanya arus listrik di dalam suatu medan magnet.",
        word:"Gaya Lorentz"
    },
    {
        hint:"Magnet dapat didapatkan pada batuan yang mengandung…",
        word:"Fe3O4"
    },
    {
        hint:"Diketahui pada sebuah travo, Vp =10V, Vs = 20V, Ip = 348 A. Arus listrik yang mengalir pada kumparan sekunder adalah … A",
        word:"194"
    },
    {
        hint:"Benda yang dapat ditarik kuat oleh magnet, seperti besi dan baja, disebut…",
        word:"Feromagnetik"
    },
    {
        hint:"Ketika dua kutub magnet yang sama berdekatan, maka kedua kutub itu akan … satu sama lain.",
        word:"Menolak"
    },
    {
        hint:"“Atom adalah suatu bagian yang paling kecil dari sebuah materi dan bagian itu tidak dapat dibagi-bagi lagi” Merupakan teori atom milik…",
        word:"Dalton"
    },
    {
        hint:"Natrium memiliki massa 23 dan nomor atom 11. Jumlah neutron Natrium adalah…",
        word:"12"
    },
    {
        hint:"Senyawa yang berfungsi untuk mengaktifkan suatu zat agar dapat berinteraksi. Menghasilkan busa.",
        word:"Surfaktan"
    },
    {
        hint:"Zat dalam alat pendingin udara (AC) yang dapat menipiskan ozon.",
        word:"Chlorofluorocarbon"
    },
    {
        hint:"Istilah untuk molekul yang terdiri dari dua atom",
        word:"Diatomik"
    },
    {
        hint:"Nama dapur untuk senyawa yang dilambangkan dengan CH3COOH.",
        word:"Cuka"
    },
    {
        hint:"Salah satu jenis plastik yang dapat dengan mudah dilunakkan dengan panas.",
        word:"Termoplastik"
    },
    {
        hint:"Salah satu prinsip dalam teknologi ramah lingkungan dengan cara mengurangi kegiatan yang menghasilkan sampah.",
        word:"Reduce"
    },
    {
        hint:"Bahan yang dicampur ke bahan kaca agar kaca menjadi sangat kuat.",
        word:"Boraks"
    },
    {
        hint:"Energi dari dalam lapisan bumi yang dapat dimanfaatkan menjadi penyedia energi listrik.",
        word:"Geothermal"
    },
    {
        hint:"Organisme yang membantu menguraikan materi organik.",
        word:"Dekomposer"
    }
];
const soal_fis_8=[
    {
        hint:"Rumus kelajuan",
        word:" v=s/t"
    },
    {
        hint:"“Jika resultan gaya pada suatu benda sama dengan nol, maka benda yang diam akan tetap diam dan benda yang bergerak akan tetap bergerak dengan kecepatan tetap selama tidak ada gaya eksternal yang mengenainya” Adalah salah satu hukum newton yang disebut juga hukum…        ",
        word:"Inersia"
    },
    {
        hint:"Hukum II Newton berbunyi “____ dari suatu benda akan sebanding dengan jumlah gaya (resultan gaya) yang bekerja pada benda tersebut dan berbanding terbalik dengan massanya. ",
        word:"Percepatan"
    },
    {
        hint:"Gaya tarik-menarik yang terjadi antara semua partikel yang memiliki massa.",
        word:"gravitasi"
    },
    {
        hint:"Gaya yang terjadi karena interaksi antara permukaan 2 benda.",
        word:"Gesek"
    },
    {
        hint:"Rumus gaya gravitasi",
        word:"W=m.g"
    },
    {
        hint:"Rumus Daya.",
        word:"P=W/t"
    },
    {
        hint:"Rumus Usaha",
        word:" W=F.s"
    },
    {
        hint:"Gerobak, gunting, alat pemecah kemiri merupakan alat yang berkerja berdasarkan prisip",
        word:"Tuas"
    },
    {
        hint:"Katrol yang digunakan pada lift gedung bertingkat.",
        word:"Majemuk"
    },
    {
        hint:"Rahang gigi merupakan prinsip pengungkit ke…",
        word:"Tiga"
    },
    {
        hint:"Proses perpindahan molekul air atau zat pelarut dari pelarut berkonsentrasi rendah ke dalam bentuk larutan berkonsentrasi tinggi",
        word:"Osmosis"
    },
    {
        hint:"Proses perpindahan molekul air atau zat pelarut dari pelarut berkonsentrasi tinggi ke dalam bentuk larutan berkonsentrasi rendah",
        word:"Difusi"
    },
    {
        hint:"Larutan yang memiliki konsentrasi sama atau seimbang.",
        word:"Isotonik"
    },
    {
        hint:"Tekanan dari zat cair ke semua arah pada suatu benda",
        word:"Hidrostatis"
    },
    {
        hint:"Hukum yang berbunyi “Suatu benda yang dicelupkan sebagian atau seluruhnya ke dalam fluida, akan mengalami gaya ke atas yang besarnya sama dengan berat fluida yang dipindahkan oleh benda tersebut.”",
        word:"Archimedes"
    },
    {
        hint:"Alat pengukur tekanan udara.",
        word:"Barometer"
    },
    {
        hint:"Hukum yang menyatakan “Pada suhu tetap, tekanan gas di dalam ruang tertutup berbanding terbalik dengan volumenya”",
        word:"Boyle"
    },
    {
        hint:"Berdasarkan arah rambatnya, gelombang cahaya, gelombang permukaan air dan gelombang pada tali merupakan jenis gelombang….",
        word:"Transversal"
    },
    ,
    {
        hint:"Jenis Gelombang yang arah getarnya searah (paralel) dengan arah rambatannya",
        word:"Longitudinal"
    },
    {
        hint:"Bunyi pantul yang dihasilkan setelah bunyi asli keluar.",
        word:"Gema"
    },
    {
        hint:"Peristiwa gerak bolak-balik secara teratur melalui titik kesetimbangan",
        word:"Getaran"
    },
    {
        hint:"Rumus Periode getaran",
        word:"T=t/n"
    },
    {
        hint:"Rumus frekuensi",
        word:"f=n/t"
    },
    {
        hint:"Jenis cermin yang sifat bayangannya maya (Bayangan berada dibelakan cermin) dan tegak/tidak terbalik",
        word:"Cembung"
    },
    {
        hint:"Jenis cermin yang digunakan sebagau reflektor pada lampu mobil dan senter",
        word:"Cekung"
    },
    {
        hint:"Jenis cermin yang sifat bayangan yang terbentuk adalah khayal, tegak, dan sama besar",
        word:"Datar"
    },
    {
        hint:"Bagian mata yang mengatur jumlah cahaya yang masuk ke mata",
        word:"Lensa"
    },
    {
        hint:"Gangguan pengelihatan dimana bayangan jatuh dibelakang retina sehingga harus menggunakan kacamata lensa cembung. Nama lainnya adalah rabun dekat.",
        word:"Hypermetropia"
    },
    {
        hint:"Alat optik yang digunakan untuk melihat benda tak kasat mata.",
        word:"Mikroskop"
    }
];

const soal_fis_7=[
    {
        hint:"Satuan yang mengukur Pascal",
        word:"Pascal"
    },
    {
        hint:"Nama alat ukur yang dapat mengukur suhu.",
        word:"Termometer"
    },
    {
        hint:"Nama alat yang mengukur kecepatan.",
        word:"Speedometer"
    },
    {
        hint:"Satuan SI yang digunakan untuk menghitung intensitas cahaya.",
        word:"Candela"
    },
    {
        hint:"Skala ____.bagian dari jangka sorong yang fungsinya untuk menambahkan tingkat akurasi ekstra pada pengukuran.",
        word:"Nonius"
    },
    {
        hint:"Jenis campuran antara dua zat atau lebih dimana partikel-partikel penyusun tidak dapat dibedakan lagi.",
        word:"Homogen"
    },
    {
        hint:"Sifat Unsur Non-logam dimana unsur non-logam tidak dapat menghantarkan listrik.",
        word:"Isolator"
    },
    {
        hint:"Bagian zat yang dapat dipisahkan menjadi atom dan terdiri lebih dari satu jenis unsur yang sejenis.  ",
        word:"Molekul"
    },
    {
        hint:"Teknik pemisahan campuran yang prosesnya dengan memisahkan campuran berdasarkan perbedaan ukuran partikel.",
        word:"Filtrasi"
    },
    {
        hint:"Proses terbentuknya salju merupakan contoh perubahan bentuk zat secara….",
        word:"Fisika"
    },
    {
        hint:"Proses pertambahan ukuran (panjang, luas, atau volume) suatu zat karena dipanaskan.",
        word:"Pemuaian"
    },
    {
        hint:"Skala termometer yang titik bekunya 32 derajat",
        word:"Fahrenheit"
    },
    {
        hint:"Alat yang digunakan untuk menyelidiki pemuaian pada benda padat.",
        word:"Musschenbroek"
    },
    {
        hint:"Jenis perpindahan kalor secara mengalir, terjadi disertai dengan perpindahan zat perantara        ",
        word:"Konveksi"
    },
    {
        hint:"Perubahan wujud gas dari zat padat ke zat gas.",
        word:"Menyublim"
    },
    {
        hint:"Energi yang dimiliki suatu benda ketika sedang bergerak",
        word:"Kinetik"
    },
    {
        hint:"E = m.g.h merupakan rumus untuk menghitung Energi…",
        word:"Potensial"
    },
    {
        hint:"Salah satu alat yang dapat mengubah energi gerak menjadi listrik.",
        word:"Dinamo"
    },
    {
        hint:"Salah satu proses pengubahan energi cahaya menjadi energi kimia.",
        word:"Fotosintesis"
    },
    {
        hint:"Bahan bakar yang diproduksi dari bahan organik.",
        word:"Biofuel"
    },
    {
        hint:"Lapisan bumi erdapat pada kedalaman 2900-5200km dalam bumi dan terdiri dari material cari.",
        word:"Inti bumi"
    },
    {
        hint:"Lapisan bumi yang disebut juga astenosfer dan tebalnya 2900 km",
        word:"Mantel"
    },
    {
        hint:"Lapisan atmosfer yang paling dekat dengan bumi",
        word:"Troposfer"
    },
    {
        hint:"Gempa bumi yang terjadi karena aktivitas magma, terjadi sebelum gunung meletus.",
        word:"Vulkanik"
    },
    {
        hint:"Lapisan atmosfer yang didalamnya terdapat lapisan ozon",
        word:"Stratosfer"
    },
    {
        hint:"Planet di tata surya yang berwarna abu-abu, 57 juta km dari matahari dan merupakan planet terkecil.",
        word:"Merkurius"
    },
    {
        hint:"Planet berwarna biru muda, merupakan planet terdingin dan memiliki cincin vertikal",
        word:"Uranus"
    },{
        hint:"Batu-batuan yang melayan di luar angkasa",
        word:"Meteoroid"
    },
    {
        hint:"Fase bulan pada hari ke – 8 dan hari ke-21 sejak bulan baru",
        word:"Perbani"
    },
    {
        hint:"Lapisan bawah atmosfer matahari",
        word:"Kromosfer"
    }
];