let historyCount = 0; // Geçmiş sayısını tutacak değişken

document.getElementById('calculate').addEventListener('click', function() {
    const speed = document.getElementById('speed').value;
    const distance = document.getElementById('distance').value;

    if (speed && distance && speed > 0 && distance > 0) {
        const time = distance / speed; // zaman saat cinsinden
        const hours = Math.floor(time); // tam saat
        const minutes = Math.round((time - hours) * 60); // dakika

        const resultText = `${hours} saat ${minutes} dakika`;
        document.getElementById('result').textContent = resultText;

        // Geçmişe ekle
        historyCount++;
        const historyItem = document.createElement('li');
        historyItem.textContent = `${historyCount}. Hız: ${speed} km/h, Yol: ${distance} km, Süre: ${resultText}`;
        document.getElementById('historyList').appendChild(historyItem);
        
        // Temizle butonlarını göster
        document.getElementById('clear').style.display = 'inline';
        document.getElementById('clearBottom').style.display = 'inline';
    } else {
        alert('Lütfen geçerli bir hız ve yol girin.');
    }
});

document.getElementById('clear').addEventListener('click', clearHistory);
document.getElementById('clearBottom').addEventListener('click', clearHistory);

function clearHistory() {
    document.getElementById('speed').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('result').textContent = '0 saat';
    document.getElementById('historyList').innerHTML = ''; // Geçmişi temizle
    historyCount = 0; // Geçmiş sayısını sıfırla

    // Temizle butonlarını gizle
    document.getElementById('clear').style.display = 'none';
    document.getElementById('clearBottom').style.display = 'none';
}
