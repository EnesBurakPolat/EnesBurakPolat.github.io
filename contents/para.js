// İşlem seçimi değiştiğinde giriş alanlarını oluştur
document.getElementById('operation').addEventListener('change', function () {
    const operation = this.value;
    const inputs = document.getElementById('inputs');
    inputs.innerHTML = ''; // Önceki girdileri temizle

    // Seçilen işleme göre giriş alanlarını oluştur
    if (operation === '1') {
        inputs.innerHTML += `
            <label for="invested">Yatırılan Para:</label>
            <input type="number" id="invested" required>
            <label for="btcPrice">1 Birim Kaç TL:</label>
            <input type="number" id="btcPrice" required>
            <label for="desiredPrice">İstenen 1 Birim Değeri:</label>
            <input type="number" id="desiredPrice" required>
        `;
    } else if (operation === '2') {
        inputs.innerHTML += `
            <label for="initialInvestment">Yatırılan Para:</label>
            <input type="number" id="initialInvestment" required>
            <label for="desiredProfit">İstenen Kar:</label>
            <input type="number" id="desiredProfit" required>
            <label for="currentPrice">1 Birimin Değeri:</label>
            <input type="number" id="currentPrice" required>
        `;
    } else if (operation === '3') {
        inputs.innerHTML += `
            <label for="currencyAmount">Döviz Miktarı:</label>
            <input type="number" id="currencyAmount" required>
            <label for="currencyValue">1 Döviz Kaç TL:</label>
            <input type="number" id="currencyValue" required>
        `;
    } else if (operation === '4') {
        inputs.innerHTML += `
            <label for="currentValue">Şu Anki Değer:</label>
            <input type="number" id="currentValue" required>
            <label for="futureValue">Olacak Değeri:</label>
            <input type="number" id="futureValue" required>
        `;
    }

    // Grafik türü seçimi
    inputs.innerHTML += `
        <label for="chartType">Grafik Türü:</label>
        <select id="chartType">
            <option value="bar">Sütun Grafiği</option>
            <option value="pie">Pasta Grafiği</option>
            <option value="line">Çizgi Grafiği</option>
        </select>
    `;

    // Mevcut grafiği yok et
    if (window.myChart) {
        window.myChart.destroy();
        document.getElementById('chart').classList.add('hidden'); // Grafik gizlensin
    }
});

// Hesapla butonuna tıklama olayını dinleyin
document.getElementById('calculate').addEventListener('click', function () {
    const operation = document.getElementById('operation').value;
    let profit, total, percentage;

    // Hesaplamalar
    if (operation === '1') {
        const invested = parseFloat(document.getElementById('invested').value);
        const btcPrice = parseFloat(document.getElementById('btcPrice').value);
        const desiredPrice = parseFloat(document.getElementById('desiredPrice').value);
        profit = ((invested / btcPrice) * desiredPrice) - invested; // Kar hesaplama
        total = invested + profit; // Yatırılan para + kar
        percentage = (profit / invested) * 100;
    } else if (operation === '2') {
        const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
        const desiredProfit = parseFloat(document.getElementById('desiredProfit').value);
        const currentPrice = parseFloat(document.getElementById('currentPrice').value);
        
        // İstenen kar için gereken birim değeri hesaplama
        const requiredPrice = (desiredProfit / initialInvestment) * currentPrice + currentPrice;

        profit = desiredProfit; // İstenen kar
        total = initialInvestment + profit; // Yatırılan para + kar
        percentage = (profit / initialInvestment) * 100;

        document.getElementById('results').innerHTML = `
            <p>1 Birimin Olması Gereken Değeri: ${requiredPrice.toFixed(2)} TL</p>
            <p>Toplam Para: ${total.toFixed(2)} TL</p>
            <p>Artış Yüzdesi: ${percentage.toFixed(2)}%</p>
        `;
    } else if (operation === '3') {
        const currencyAmount = parseFloat(document.getElementById('currencyAmount').value);
        const currencyValue = parseFloat(document.getElementById('currencyValue').value);
        const totalValue = currencyAmount * currencyValue;
        document.getElementById('results').innerHTML = `
            <p>Döviz: ${currencyAmount} -> TL: ${totalValue.toFixed(2)} TL</p>
        `;
        return; // Döviz hesaplama için işlemi sonlandır
    } else if (operation === '4') {
        const currentValue = parseFloat(document.getElementById('currentValue').value);
        const futureValue = parseFloat(document.getElementById('futureValue').value);
        const result = (100 * (futureValue - currentValue)) / currentValue;
        document.getElementById('results').innerHTML = `
            <p>Sonuç: ${result.toFixed(2)}% değişim</p>
        `;
        return; // Gelecek değer hesaplama için işlemi sonlandır
    }

    // Sonuçları güncelle
    document.getElementById('profit').innerText = `Kar: ${profit ? profit.toFixed(2) : 0} TL`;
    document.getElementById('total').innerText = `Toplam Para: ${total ? total.toFixed(2) : 0} TL`;
    document.getElementById('percentage').innerText = `Artış Yüzdesi: ${percentage ? percentage.toFixed(2) : 0}%`;
    document.getElementById('results').classList.remove('hidden');

    // Grafik oluştur veya güncelle
    const ctx = document.getElementById('chart').getContext('2d');

    // Eğer mevcut bir grafik varsa, onu yok et
    if (window.myChart) {
        window.myChart.destroy();
    }

    let chartData, chartLabels;
    const chartType = document.getElementById('chartType').value; // Seçilen grafik türü

    if (operation === '1' || operation === '2') {
        chartLabels = ['Toplam Para', 'Kar']; // Grafik etiketleri
        chartData = [total, profit]; // Grafik verileri
    } else if (operation === '4') {
        const currentValue = parseFloat(document.getElementById('currentValue').value);
        const futureValue = parseFloat(document.getElementById('futureValue').value);
        chartLabels = ['Şu Anki Değer', 'Olacak Değer'];
        chartData = [currentValue, futureValue];
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    max: Math.max(...chartData) * 1.2 // Y ekseninin maksimum değerini ayarlayın
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    // Grafik türüne göre grafik oluştur
    window.myChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Finansal Değerler',
                data: chartData,
                backgroundColor: ['#007BFF', '#28A745'],
                borderColor: ['#0056b3', '#218838'],
                borderWidth: 2,
                fill: false // Çizgi grafiği için dolgu kaplamasını devre dışı bırak
            }]
        },
        options: chartOptions
    });

    document.getElementById('chart').classList.remove('hidden');
});

// Reset butonu ekle
document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('inputs').innerHTML = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('profit').innerText = '';
    document.getElementById('total').innerText = '';
    document.getElementById('percentage').innerText = '';
    if (window.myChart) {
        window.myChart.destroy();
        document.getElementById('chart').classList.add('hidden'); // Grafik gizlensin
    }
});
