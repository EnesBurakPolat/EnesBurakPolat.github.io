// Basit bir Pacman oyununun temel kodları

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const pacman = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 30,
    speed: 5,
    dx: 0,
    dy: 0,
    color: 'yellow',
};

function drawPacman() {
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI); //pacman açısı
    ctx.lineTo(pacman.x, pacman.y);
    ctx.fillStyle = pacman.color;
    ctx.fill();
    ctx.closePath();
}

function update() {
    pacman.x += pacman.dx;
    pacman.y += pacman.dy;

    if (pacman.x < pacman.size) pacman.x = pacman.size;
    if (pacman.x > canvas.width - pacman.size) pacman.x = canvas.width - pacman.size;
    if (pacman.y < pacman.size) pacman.y = pacman.size;
    if (pacman.y > canvas.height - pacman.size) pacman.y = canvas.height - pacman.size;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPacman();
}

function movePacman(e) {
    switch(e.key) {
        case 'ArrowUp':
            pacman.dx = 0;
            pacman.dy = -pacman.speed;
            break;
        case 'ArrowDown':
            pacman.dx = 0;
            pacman.dy = pacman.speed;
            break;
        case 'ArrowLeft':
            pacman.dx = -pacman.speed;
            pacman.dy = 0;
            break;
        case 'ArrowRight':
            pacman.dx = pacman.speed;
            pacman.dy = 0;
            break;
    }
}

document.addEventListener('keydown', movePacman);

setInterval(update, 1000 / 60); // 60 FPS
