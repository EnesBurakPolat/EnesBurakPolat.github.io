// Tarih ve saati gösterme
function updateDateTime() {
    const now = new Date();
    const datetime = now.toLocaleString('tr-TR', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('datetime').textContent = datetime;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Hesap makinesi işlevleri
function appendToResult(value) {
    const resultField = document.getElementById('result');
    if (resultField.disabled) {
        resultField.disabled = false; // Giriş alanını etkinleştir
    }
    // Çarpma işlemi için x sembolü ekle
    if (value === '*') {
        value = 'x';
    }
    // Bölme işlemi için / sembolü yerine ÷ ekle
    if (value === '/') {
        value = '÷';
    }
    resultField.value += value; // Değeri ekle
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        const result = eval(resultField.value
            .replace(/,/g, '.')
            .replace(/x/g, '*')
            .replace(/÷/g, '/')
            .replace(/(\d)(x)(\d)/g, '$1*$3')); // Değeri hesapla

        // Sonucu formatla ve ayarla
        resultField.value = result.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Yazı boyutunu ayarlama
        if (resultField.value.length > 10) { // 10 karakterden fazlaysa
            resultField.classList.remove('large');
            resultField.classList.add('small');
        } else {
            resultField.classList.remove('small');
            resultField.classList.add('large');
        }
    } catch (error) {
        alert('Hatalı işlem!');
        clearResult();
    }
}



function clearResult() {
    document.getElementById('result').value = ''; // Temizle
}

function squareResult() {
    const resultField = document.getElementById('result');
    const value = parseFloat(resultField.value.replace(/,/g, '.')); // Virgülleri noktaya çevir
    if (!isNaN(value)) {
        // Kare al
        const squaredValue = value * value;
        // Sonucu formatla ve ayarla
        resultField.value = squaredValue.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
        alert('Hatalı değer!');
    }
}


function toggleSign() {
    const resultField = document.getElementById('result');
    const value = parseFloat(resultField.value);
    if (!isNaN(value)) {
        resultField.value = (-value).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
}
