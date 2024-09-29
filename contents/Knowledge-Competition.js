let categories = {
    Müzik: [
        { question: "Beethoven hangi dönemin bestecisidir?", answers: ["Klasik", "Romantik", "Barok", "Modern"], correct: 1 },
        { question: "En çok satan albüm hangisidir?", answers: ["Thriller", "Back in Black", "The Dark Side of the Moon", "Rumours"], correct: 0 },
        { question: "Ünlü rock grubu The Beatles hangi şehirde kuruldu?", answers: ["Londra", "Liverpool", "Manchester", "Birmingham"], correct: 1 },
        { question: "Mozart'ın doğum yeri neresidir?", answers: ["Viyana", "Zürih", "Salzburg", "Berlin"], correct: 2 },
        { question: "Enstrümanlar arasında hangisi bir yaylı çalgıdır?", answers: ["Piyano", "Saksafon", "Keman", "Bateri"], correct: 2 },
        { question: "Aşağıdaki sanatçılardan hangisi pop müzikle tanınır?", answers: ["Freddie Mercury", "Kurt Cobain", "Madonna", "Eric Clapton"], correct: 2 },
        { question: "Üç ana müzik notasından biri nedir?", answers: ["Do", "Fa", "Si", "Re"], correct: 0 },
        { question: "Rock müzikte hangi enstrüman genellikle ön plandadır?", answers: ["Gitar", "Piyano", "Saksafon", "Keman"], correct: 0 },
        { question: "Hangi tür müzik, Afrika kökenli dans müziğinden türetilmiştir?", answers: ["Blues", "Jazz", "Klasik", "Pop"], correct: 1 },
        { question: "Dünyaca ünlü festival Coachella hangi ülkede yapılmaktadır?", answers: ["Almanya", "İngiltere", "Fransa", "ABD"], correct: 3 }
    ],
    Sanat: [
        { question: "Mona Lisa tablosunu kim yapmıştır?", answers: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2 },
        { question: "En ünlü heykeltıraşlardan biri kimdir?", answers: ["Rodin", "Rembrandt", "Warhol", "Kandinsky"], correct: 0 },
        { question: "Sürrealizmin öncüsü olarak bilinen sanatçı kimdir?", answers: ["Dali", "Van Gogh", "Munch", "Monet"], correct: 0 },
        { question: "Hangi sanat akımı doğayı ve ışığı vurgular?", answers: ["Empresyonizm", "Kübizm", "Sürrealizm", "Rönesans"], correct: 0 },
        { question: "Hangi sanat eseri, bir kahve dükkanını temsil eden ilk eserlerden biridir?", answers: ["The Night Cafe", "Starry Night", "The Scream", "The Persistence of Memory"], correct: 0 },
        { question: "Hangi sanat dalı çizim, resim ve heykel gibi şekilleri içerir?", answers: ["Görsel sanatlar", "Müzik", "Performans sanatı", "Edebiyat"], correct: 0 },
        { question: "Barok sanat dönemi hangi yıllar arasında var olmuştur?", answers: ["1600-1750", "1750-1800", "1800-1850", "1850-1900"], correct: 0 },
        { question: "Aşağıdaki sanat akımlarından hangisi 20. yüzyılda ortaya çıkmıştır?", answers: ["Rönesans", "Kübizm", "Romantizm", "Barok"], correct: 1 },
        { question: "Hangi sanatçı, 'Yıldızlı Gece' tablosu ile tanınır?", answers: ["Monet", "Van Gogh", "Picasso", "Kandinsky"], correct: 1 },
        { question: "Hangi sanat dalı, şiir, roman ve hikaye yazmayı kapsar?", answers: ["Müzik", "Görsel sanatlar", "Edebiyat", "Tiyatro"], correct: 2 }
    ],
    Bilim: [
        { question: "Su'nun kimyasal formülü nedir?", answers: ["H2O", "O2", "H2", "CO2"], correct: 0 },
        { question: "Güneş sistemi kaç gezegen içerir?", answers: ["7", "8", "9", "10"], correct: 1 },
        { question: "DNA'nın açılımı nedir?", answers: ["Deoksiribonükleik Asit", "Dizoksiribonükleik Asit", "Dihidrojen Nükleik Asit", "Deoksiribonükleat Asit"], correct: 0 },
        { question: "Hangi gezegen 'Kırmızı Gezegen' olarak bilinir?", answers: ["Mars", "Venüs", "Jüpiter", "Satürn"], correct: 0 },
        { question: "Newton'un hangi yasası hareketi tanımlar?", answers: ["İkincil yasa", "Birincil yasa", "Üçüncü yasa", "Dördüncü yasa"], correct: 1 },
        { question: "Hangi elementin sembolü 'Fe' dir?", answers: ["Kurşun", "Demir", "Alüminyum", "Çinko"], correct: 1 },
        { question: "Hangi gezegen en büyük gezegendir?", answers: ["Venüs", "Mars", "Jüpiter", "Satürn"], correct: 2 },
        { question: "Atomun merkezi neresidir?", answers: ["Elektron", "Proton", "Nötron", "Nükleus"], correct: 3 },
        { question: "Işık hızı nedir?", answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correct: 0 },
        { question: "Hangisi bir termodinamik yasasıdır?", answers: ["Birinci yasa", "İkincil yasa", "Üçüncü yasa", "Dördüncü yasa"], correct: 0 }
    ],
    Matematik: [
        { question: "Bir üçgenin iç açıları toplamı nedir?", answers: ["90°", "180°", "360°", "270°"], correct: 1 },
        { question: "Pi sayısının yaklaşık değeri nedir?", answers: ["2.14", "3.14", "4.14", "5.14"], correct: 1 },
        { question: "2'nin 5. kuvveti nedir?", answers: ["8", "16", "32", "64"], correct: 2 },
        { question: "Bir dairenin alan formülü nedir?", answers: ["πr^2", "2πr", "πd", "2r"], correct: 0 },
        { question: "Bir dikdörtgenin çevresinin formülü nedir?", answers: ["2a + 2b", "a^2 + b^2", "ab", "2ab"], correct: 0 },
        { question: "Hangi sayı asal bir sayıdır?", answers: ["4", "6", "9", "7"], correct: 3 },
        { question: "Bir çarpmanın sonucu olan işlemin adı nedir?", answers: ["Toplama", "Çıkarma", "Çarpma", "Bölme"], correct: 2 },
        { question: "Hangisi bir ondalık kesirdir?", answers: ["1/4", "3/5", "0.75", "1/2"], correct: 2 },
        { question: "Aynı çarpanın tekrar tekrar çarpılmasıyla oluşan işlemin adı nedir?", answers: ["Toplama", "Çıkarma", "Çarpma", "Bölme"], correct: 2 },
        { question: "Bir kürenin hacim formülü nedir?", answers: ["4/3πr^3", "2πr^3", "πr^2", "2/3πr^2"], correct: 0 }
    ],
    Spor: [
        { question: "2018 FIFA Dünya Kupası'nı hangi ülke kazandı?", answers: ["Brezilya", "Almanya", "Fransa", "Arjantin"], correct: 2 },
        { question: "En çok NBA şampiyonluğu kazanan takım hangisidir?", answers: ["Lakers", "Bulls", "Celtics", "Warriors"], correct: 2 },
        { question: "Hangi spor dalında 'hat-trick' terimi kullanılır?", answers: ["Futbol", "Basketbol", "Hokey", "Voleybol"], correct: 0 },
        { question: "Dünyanın en hızlı koşucusu kimdir?", answers: ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Mo Farah"], correct: 0 },
        { question: "Teniste 'Grand Slam' turnuvaları hangileridir?", answers: ["Australian Open, French Open, Wimbledon, US Open", "Australian Open, French Open, ATP Finals", "US Open, Wimbledon, ATP Finals", "French Open, Wimbledon, Davis Cup"], correct: 0 },
        { question: "Formula 1'de en çok şampiyonluk kazanan pilot kimdir?", answers: ["Michael Schumacher", "Lewis Hamilton", "Ayrton Senna", "Alain Prost"], correct: 1 },
        { question: "Hangi sporda 'serbest stil' bulunmaktadır?", answers: ["Yüzme", "Gimnastik", "Hokey", "Futbol"], correct: 0 },
        { question: "Hangi ülke basketbolda en çok madalya kazanmıştır?", answers: ["ABD", "Sovyetler Birliği", "Çin", "Yugoslavya"], correct: 0 },
        { question: "Hangi spor dalında 'servis' terimi kullanılır?", answers: ["Futbol", "Voleybol", "Basketbol", "Hokey"], correct: 1 },
        { question: "Yüzmede 'kral yüzme' hangi tarzda yapılır?", answers: ["Sırtüstü", "Kurbağalama", "Serbest", "Kelebek"], correct: 1 }
    ],
    Video_Oyunları: [
        { question: "Minecraft hangi yılda piyasaya sürüldü?", answers: ["2009", "2011", "2013", "2015"], correct: 1 },
        { question: "Mario'nun düşmanı kimdir?", answers: ["Luigi", "Bowser", "Wario", "Toad"], correct: 1 },
        { question: "Dünyanın en çok satan video oyunu hangisidir?", answers: ["Tetris", "Minecraft", "Wii Sports", "GTA V"], correct: 0 },
        { question: "League of Legends hangi tür bir oyundur?", answers: ["FPS", "MOBA", "RPG", "Aksiyon"], correct: 1 },
        { question: "PUBG'nin açılımı nedir?", answers: ["PlayerUnknown's Battlegrounds", "Player's Underground Battle", "Public Battleground", "Player's Ultimate Battle"], correct: 0 },
        { question: "Hangi oyun, açık dünya ve hayatta kalma unsurlarını birleştirir?", answers: ["Skyrim", "Ark: Survival Evolved", "Fallout", "The Witcher"], correct: 1 },
        { question: "The Legend of Zelda serisinin ana karakteri kimdir?", answers: ["Zelda", "Link", "Ganon", "Navi"], correct: 1 },
        { question: "Call of Duty hangi tür bir oyundur?", answers: ["Strateji", "Savaş", "Aksiyon", "Simülasyon"], correct: 2 },
        { question: "God of War serisi hangi mitolojiye dayanır?", answers: ["İskandinav", "Yunan", "Mısır", "Hindu"], correct: 1 },
        { question: "Hangi video oyunu, savaş royale türünde en popüler olanlardan biridir?", answers: ["Fortnite", "Minecraft", "Among Us", "The Last of Us"], correct: 0 }
    ],
    Biyoloji: [
        { question: "DNA'nın yapı taşı nedir?", answers: ["Amino Asit", "Nükleotid", "Protein", "Karbonhidrat"], correct: 1 },
        { question: "Hangi organ insanda oksijen alımında görev yapar?", answers: ["Kalp", "Böbrek", "Akciğer", "Karaciğer"], correct: 2 },
        { question: "Hücre zarının yapısında hangi moleküller bulunur?", answers: ["Karbonhidrat", "Lipit", "Protein", "Hepsi"], correct: 3 },
        { question: "Bitkilerin fotosentez yaptığı organ hangisidir?", answers: ["Kök", "Gövde", "Yaprak", "Çiçek"], correct: 2 },
        { question: "Hangi besin maddesi enerji kaynağıdır?", answers: ["Vitamin", "Mineral", "Protein", "Karbonhidrat"], correct: 3 },
        { question: "Hangi tür organizmalar, kendi besinlerini üretme yeteneğine sahiptir?", answers: ["Ototrof", "Heterotrof", "Saprofit", "Parazit"], correct: 0 },
        { question: "İnsanda kaç adet kromozom bulunur?", answers: ["23", "46", "32", "64"], correct: 1 },
        { question: "Hangi organ vücuttaki toksinleri temizler?", answers: ["Kalp", "Böbrek", "Akciğer", "Karaciğer"], correct: 3 },
        { question: "Geniş bir ekosistemdeki farklı canlı türlerinin etkileşimlerine ne ad verilir?", answers: ["Biyom", "Ekoloji", "Popülasyon", "Habitat"], correct: 1 },
        { question: "Hangi virüs AIDS hastalığına neden olur?", answers: ["HIV", "Hepatit B", "SARS", "Ebola"], correct: 0 }
    ],
    Coğrafya: [
        { question: "Dünyanın en yüksek dağı hangisidir?", answers: ["K2", "Everest", "Kilimanjaro", "Aconcagua"], correct: 1 },
        { question: "En büyük okyanus hangisidir?", answers: ["Atlantik", "Hint", "Pasifik", "Kuzey Buz"], correct: 2 },
        { question: "Hangi ülke, en fazla yüzölçümüne sahiptir?", answers: ["Rusya", "Kanada", "Çin", "ABD"], correct: 0 },
        { question: "Hangi nehir, dünyadaki en uzun nehir olarak kabul edilir?", answers: ["Amazon", "Nil", "Yangtze", "Mississippi"], correct: 1 },
        { question: "Hangi ülke, hem Asya hem de Avrupa kıtalarında yer almaktadır?", answers: ["Türkiye", "Mısır", "Rusya", "Yunanistan"], correct: 0 },
        { question: "Dünyanın en büyük çölü hangisidir?", answers: ["Sahara", "Gobi", "Kalahari", "Atacama"], correct: 0 },
        { question: "Hangi ülke, en fazla adaya sahip olan ülkedir?", answers: ["Avustralya", "Endonezya", "Brezilya", "Filipinler"], correct: 1 },
        { question: "Bir ada ülkesi olarak bilinen ülke hangisidir?", answers: ["Japonya", "Almanya", "Fransa", "Meksika"], correct: 0 },
        { question: "Hangi dağ, Kuzey Amerika'nın en yüksek zirvesidir?", answers: ["Denali", "Rocky Dağları", "Appalachian Dağları", "Sierra Nevada"], correct: 0 },
        { question: "Hangi deniz, Akdeniz'in bir parçasıdır?", answers: ["Karadeniz", "Bering Denizi", "Kızıldeniz", "Andaman Denizi"], correct: 0 }
    ],
    Tarih: [
        { question: "Roma İmparatorluğu ne zaman yıkıldı?", answers: ["476", "1453", "1215", "1066"], correct: 0 },
        { question: "İlk Dünya Savaşı hangi yıllar arasında gerçekleşmiştir?", answers: ["1914-1918", "1939-1945", "1910-1914", "1899-1902"], correct: 0 },
        { question: "Aşağıdakilerden hangisi Antik Mısır'da önemli bir yapıydı?", answers: ["Büyük Piramit", "Machu Picchu", "Colosseum", "Stonehenge"], correct: 0 },
        { question: "Fransız Devrimi hangi yılda başladı?", answers: ["1789", "1776", "1804", "1848"], correct: 0 },
        { question: "Hangi lider, Sovyetler Birliği'ni yönetti?", answers: ["Lenin", "Stalin", "Troçki", "Khruşçov"], correct: 1 },
        { question: "Mısır'daki firavunlar hangi inanca sahipti?", answers: ["Buddizm", "Hristiyanlık", "İslam", "Politeizm"], correct: 3 },
        { question: "İlk yazılı belgelerin bulunduğu medeniyet hangisidir?", answers: ["Mezopotamya", "Mısır", "Yunan", "Roma"], correct: 0 },
        { question: "Amerika Birleşik Devletleri'nin bağımsızlık bildirgesi hangi yılda imzalanmıştır?", answers: ["1776", "1789", "1791", "1812"], correct: 0 },
        { question: "Tarihte 'Soğuk Savaş' dönemi hangi iki süper gücü kapsar?", answers: ["ABD - Sovyetler Birliği", "ABD - Çin", "Sovyetler Birliği - Fransa", "Çin - Hindistan"], correct: 0 },
        { question: "Dünya'nın ilk kadın pilotu kimdir?", answers: ["Amelia Earhart", "Harriet Quimby", "Bessie Coleman", "Jacqueline Cochran"], correct: 0 }
    ],
    Ülke: [
        { question: "Dünyanın en kalabalık ülkesi hangisidir?", answers: ["Hindistan", "Çin", "Amerika", "Brezilya"], correct: 0 },
        { question: "Hangi ülkenin başkenti Tokyo'dur?", answers: ["Çin", "Japonya", "Güney Kore", "Hindistan"], correct: 1 },
        { question: "Hangi ülke 'gözlerin ülkesi' olarak bilinir?", answers: ["Hindistan", "Brezilya", "Yeni Zelanda", "Çin"], correct: 2 },
        { question: "Dünyanın en küçük ülkesi hangisidir?", answers: ["San Marino", "Vatican", "Malta", "Lüxemburg"], correct: 1 },
        { question: "Hangi ülke, en fazla resmi dil konuşulan ülkedir?", answers: ["Kanada", "Belçika", "Hindistan", "Bölünmüş Kıbrıs"], correct: 2 },
        { question: "Hangi ülkenin bayrağına kırmızı ve beyaz şeritler hakimdir?", answers: ["Almanya", "Fransa", "Kanada", "Japonya"], correct: 2 },
        { question: "Hangi ülke, en fazla adaya sahip olan ülkedir?", answers: ["Endonezya", "Filipinler", "Japonya", "Yunanistan"], correct: 0 },
        { question: "Hangi ülke, en büyük yüzölçümüne sahiptir?", answers: ["Rusya", "Kanada", "Çin", "Brezilya"], correct: 0 },
        { question: "Hangi ülke, Kuzey Kore ile komşudur?", answers: ["Güney Kore", "Japonya", "Çin", "Meksika"], correct: 0 },
        { question: "Hangi ülkenin başkenti Paris'tir?", answers: ["Fransa", "Almanya", "İtalya", "İspanya"], correct: 0 }
    ],
};


let currentCategory = "";
let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalScores = {};
let timeLeft = 120;
let timerInterval;

// Kategorileri ve skorları başlat
for (let category in categories) {
    totalScores[category] = { correct: 0, incorrect: 0 };
}

function displayScores() {
    let categoryScoresDiv = document.getElementById('category-scores');
    categoryScoresDiv.innerHTML = '';

    let scoreText = `${currentCategory}: ${correctAnswers} Doğru, ${incorrectAnswers} Yanlış`;
    let scoreElement = document.createElement('p');
    scoreElement.textContent = scoreText;
    categoryScoresDiv.appendChild(scoreElement);

    let totalScoresDiv = document.getElementById('total-scores');
    totalScoresDiv.innerHTML = `Toplam Skor: ${correctAnswers} Doğru, ${incorrectAnswers} Yanlış`;

    updateOverallScores();
}

function updateOverallScores() {
    let overallScoresDiv = document.getElementById('overall-category-scores');
    overallScoresDiv.innerHTML = '';

    for (let category in totalScores) {
        let score = totalScores[category];
        let scoreText = `${category}: ${score.correct} Doğru, ${score.incorrect} Yanlış`;
        let scoreElement = document.createElement('p');
        scoreElement.textContent = scoreText;
        overallScoresDiv.appendChild(scoreElement);
    }
}

function startTimer() {
    clearInterval(timerInterval); // Mevcut zamanlayıcıyı temizle
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
}


function updateTimerDisplay() {
    document.getElementById('time-left').textContent = timeLeft;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function selectCategory(category) {
    if (currentCategory !== "" && currentQuestion < categories[currentCategory].length) {
        alert("Lütfen mevcut kategoriyi bitirin veya 'Yarışmayı Bitir' butonuna tıklayın.");
        return;
    }

    document.querySelectorAll('#category-selection button').forEach(btn => {
        btn.classList.remove('selected');
    });

    document.querySelector(`#category-selection button[onclick="selectCategory('${category}')"]`).classList.add('selected');

    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('category-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('overall-scores').classList.add('hidden');
    document.getElementById('current-category').textContent = `Kategori: ${category}`;

    timeLeft = 120;
    stopTimer(); // Mevcut zamanlayıcıyı durdur
    startTimer(); // Yeni zamanlayıcıyı başlat
    loadQuestion();
}

function loadQuestion() {
    let questionObj = categories[currentCategory][currentQuestion];
    let questionNumber = currentQuestion + 1; // Soru numarası (1'den başlayarak)
    let totalQuestions = categories[currentCategory].length; // Toplam soru sayısı
    
    // Soru metnini güncelle, soru numarasını ve toplam soru sayısını ekle
    document.getElementById('question').textContent = `${questionNumber}/${totalQuestions}: ${questionObj.question}`;
    
    document.querySelectorAll('.answer-btn').forEach((button, index) => {
        button.textContent = questionObj.answers[index];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
    });
}

function checkAnswer(selected) {
    clearInterval(timerInterval); // Mevcut zamanlayıcıyı durdur
    stopTimer();
    let questionObj = categories[currentCategory][currentQuestion];
    let buttons = document.querySelectorAll('.answer-btn');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === questionObj.correct) {
            button.classList.add('correct');
        }
    });

    if (selected === questionObj.correct) {
        buttons[selected].classList.add('correct');
        score++;
        correctAnswers++;
    } else {
        buttons[selected].classList.add('incorrect');
        incorrectAnswers++;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < categories[currentCategory].length && timeLeft > 0) {
            loadQuestion();
            startTimer(); // Yeni soruya geçerken zamanlayıcıyı yeniden başlat
        } else {
            showScore();
        }
    }, 2000);
}

function showScore() {
    stopTimer();
    totalScores[currentCategory].correct += correctAnswers;
    totalScores[currentCategory].incorrect += incorrectAnswers;

    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('scoreboard').classList.remove('hidden');
    document.getElementById('end-btn').classList.remove('hidden');

    displayScores();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    document.getElementById('scoreboard').classList.add('hidden');
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('end-btn').classList.add('hidden');
    document.getElementById('category-selection').classList.remove('hidden');
    document.getElementById('overall-scores').classList.remove('hidden');

    document.querySelectorAll('#category-selection button').forEach(btn => {
        btn.classList.remove('selected');
    });
}

function endQuiz() {
    stopTimer();
    showScore();
    currentCategory = ""; // Kategoriyi sıfırla
}

function resetAllScores() {
    for (let category in totalScores) {
        totalScores[category] = { correct: 0, incorrect: 0 };
    }
    updateOverallScores();
}

window.onload = function() {
    updateOverallScores();
};
