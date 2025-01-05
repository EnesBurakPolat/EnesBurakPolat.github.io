function countdown() {
    const targetDate = new Date("Jan 1, 2026 00:00:00").getTime(); // Hedef tarih
    const interval = setInterval(function() {
        const currentTime = new Date().getTime(); // Her saniye şu anki zamanı al
        const distance = targetDate - currentTime; // Hedef tarihe kalan süre (milisaniye)

        // Kalan zaman birimlerini hesapla
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Sonuçları ekranda güncelle
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Toplam süreyi yeniden hesaplayalım
        const totalMilliseconds = targetDate - new Date("Jan 1, 2025 00:00:00").getTime(); // Başlangıç tarihi
        const elapsedMilliseconds = totalMilliseconds - distance; // Geçen süre
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000); // Geçen süreyi saniye cinsine çevir
        const totalDurationInSeconds = Math.floor(totalMilliseconds / 1000); // Toplam süreyi saniyeye çevir

        // Yüzde hesaplama (Geçen süreyi toplam süreye oranla)
        const progressPercentage = Math.min((elapsedSeconds / totalDurationInSeconds) * 100, 100).toFixed(2);

        // Yüzdelik metnini güncelle
        document.getElementById("progressPercentage").innerHTML = `Progress: ${progressPercentage}%`;

        // İlerleme çubuğunu doldur
        document.getElementById("progressFill").style.width = `${progressPercentage}%`;

        // Geri sayım bittiğinde
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Yeni Yıl Geldi!";
            document.getElementById("progressFill").style.width = "100%";
            document.getElementById("progressPercentage").innerHTML = "Progress: 100%";
        }
    }, 1000); // Her saniyede bir çalışır
}

countdown();
