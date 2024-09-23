let historyCount = 0; // Geçmiş kayıt sayacı

document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const exchangeRate = parseFloat(document.getElementById('fromCurrency').value);

    // Kontrol: Kullanıcıdan giriş alındı mı?
    if (!isNaN(amount) && !isNaN(exchangeRate) && exchangeRate > 0) {
        const result = amount * exchangeRate; // Hesaplama

        // Sonucu biçimlendir (örn: 1.222,43 TL)
        // Sonucu biçimlendir (örn: 1.222,43 TL)
        const formattedResult = result.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");


        // Hesaplama geçmişine ekle
        addToHistory(formattedResult);
        
        // Sonucu göster
        document.getElementById('result').textContent = formattedResult;
        document.getElementById('resultContainer').style.display = 'block'; // Sonuç kısmını göster
    } else {
        alert('Lütfen geçerli bir miktar ve döviz kuru girin.');
    }
});

function addToHistory(result) {
    historyCount++; // Her eklemede sayacı artır
    const historyList = document.getElementById('historyList');

    const historyItem = document.createElement('li');
    historyItem.textContent = `${historyCount}. ${result}`; // Benzersiz numara ile birlikte ekle
    historyList.appendChild(historyItem);
    
    // Temizle butonunu göster
    document.getElementById('clearHistory').style.display = 'block';
    document.getElementById('clearHistoryBottom').style.display = 'block';
}

document.getElementById('clearHistory').addEventListener('click', clearHistory);
document.getElementById('clearHistoryBottom').addEventListener('click', clearHistory);

function clearHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Listeyi temizle
    historyCount = 0; // Sayacı sıfırla
    
    // Temizle butonunu gizle
    document.getElementById('clearHistory').style.display = 'none';
    document.getElementById('clearHistoryBottom').style.display = 'none';
}
