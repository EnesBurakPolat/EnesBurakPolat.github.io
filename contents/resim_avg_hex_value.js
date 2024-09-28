function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const canvas = document.getElementById("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const avgColor = calculateAverageColor(imgData.data);
                const hexColor = rgbToHex(avgColor);

                document.getElementById("rgbResult").textContent = `RGB: ${avgColor}`;
                document.getElementById("hexResult").textContent = `HEX: ${hexColor}`;
                document.getElementById("hexResult").style.backgroundColor = hexColor;
            };
        };
        reader.readAsDataURL(file);
    }
}

function calculateAverageColor(data) {
    let r = 0, g = 0, b = 0;
    const pixelCount = data.length / 4;

    for (let i = 0; i < data.length; i += 4) {
        r += data[i];     // Kırmızı
        g += data[i + 1]; // Yeşil
        b += data[i + 2]; // Mavi
    }

    return [Math.floor(r / pixelCount), Math.floor(g / pixelCount), Math.floor(b / pixelCount)];
}

function rgbToHex(rgb) {
    const [r, g, b] = rgb;
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function copyToClipboard(type) {
    const text = type === 'rgb' 
        ? document.getElementById("rgbResult").textContent.split(': ')[1]
        : document.getElementById("hexResult").textContent.split(': ')[1];

    navigator.clipboard.writeText(text).then(() => {
        alert(`${type.toUpperCase()} value copied to clipboard`);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
