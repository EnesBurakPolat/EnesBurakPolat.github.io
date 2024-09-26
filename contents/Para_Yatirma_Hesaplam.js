document.getElementById('calculateBtn').addEventListener('click', function() {
    // Faiz oranı ve çekilecek miktar değerlerini al
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const withdrawal = parseFloat(document.getElementById('withdrawal').value);

    // Girdilerin geçerli olup olmadığını kontrol et
    if (isNaN(rate) || isNaN(withdrawal) || rate <= 0 || withdrawal <= 0) {
        alert("Lütfen geçerli bir faiz oranı ve miktar girin.");
        return;
    }

    // Yatırılması gereken miktarı ve alınan faizi hesapla
    const requiredAmount = withdrawal / (1 + rate);
    const interestAmount = withdrawal - requiredAmount;

    // Sonuçları ekranda göster
    document.getElementById('result').textContent = requiredAmount.toFixed(2);
    document.getElementById('interest').textContent = interestAmount.toFixed(2);
});
