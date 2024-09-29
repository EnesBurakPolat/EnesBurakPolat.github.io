const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const CELL_SIZE = 25; // Hücre boyutunu artırdık
const PACMAN_SIZE = CELL_SIZE * 0.8;
const GHOST_SIZE = CELL_SIZE * 0.8;

canvas.width = 22 * CELL_SIZE;
canvas.height = 22 * CELL_SIZE;

let pacman = {
    x: CELL_SIZE * 1.5,
    y: CELL_SIZE * 1.5,
    direction: 0,
    speed: 1,
    mouthOpen: 0
};

let ghosts = [
    {x: CELL_SIZE * 9.5, y: CELL_SIZE * 9.5, color: 'red', direction: 0, speed: 0.5},
    {x: CELL_SIZE * 10.5, y: CELL_SIZE * 9.5, color: 'pink', direction: 0, speed: 0.5},
    {x: CELL_SIZE * 11.5, y: CELL_SIZE * 9.5, color: 'cyan', direction: 0, speed: 0.5},
    {x: CELL_SIZE * 12.5, y: CELL_SIZE * 9.5, color: 'orange', direction: 0, speed: 0.5}
];

let score = 0;
let lives = 3;

const maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
    [1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let pellets = [];

function initPellets() {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 0) {
                pellets.push({x: x * CELL_SIZE + CELL_SIZE / 2, y: y * CELL_SIZE + CELL_SIZE / 2});
            }
        }
    }
}

function drawMaze() {
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) {
                ctx.fillStyle = 'blue';
                ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }
}

function drawPellets() {
    ctx.fillStyle = 'white';
    pellets.forEach(pellet => {
        ctx.beginPath();
        ctx.arc(pellet.x, pellet.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawPacman() {
    ctx.save();
    ctx.translate(pacman.x, pacman.y);
    ctx.rotate((pacman.direction * Math.PI) / 180);
    
    ctx.beginPath();
    if (pacman.mouthOpen < 20) {
        ctx.arc(0, 0, PACMAN_SIZE / 2, (0.2 + pacman.mouthOpen * 0.01) * Math.PI, (1.8 - pacman.mouthOpen * 0.01) * Math.PI);
    } else {
        ctx.arc(0, 0, PACMAN_SIZE / 2, 0.2 * Math.PI, 1.8 * Math.PI);
    }
    ctx.lineTo(0, 0);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();
    
    ctx.restore();
}

function drawGhosts() {
    ghosts.forEach(ghost => {
        ctx.beginPath();
        ctx.arc(ghost.x, ghost.y, GHOST_SIZE / 2, Math.PI, 2 * Math.PI);
        ctx.lineTo(ghost.x + GHOST_SIZE / 2, ghost.y + GHOST_SIZE / 2);
        ctx.lineTo(ghost.x - GHOST_SIZE / 2, ghost.y + GHOST_SIZE / 2);
        ctx.fillStyle = ghost.color;
        ctx.fill();
        ctx.closePath();

        // Gözler
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(ghost.x - GHOST_SIZE / 4, ghost.y - GHOST_SIZE / 8, GHOST_SIZE / 8, 0, Math.PI * 2);
        ctx.arc(ghost.x + GHOST_SIZE / 4, ghost.y - GHOST_SIZE / 8, GHOST_SIZE / 8, 0, Math.PI * 2);
        ctx.fill();

        // Göz bebekleri
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(ghost.x - GHOST_SIZE / 4, ghost.y - GHOST_SIZE / 8, GHOST_SIZE / 16, 0, Math.PI * 2);
        ctx.arc(ghost.x + GHOST_SIZE / 4, ghost.y - GHOST_SIZE / 8, GHOST_SIZE / 16, 0, Math.PI * 2);
        ctx.fill();
    });
}

function movePacman() {
    let newX = pacman.x;
    let newY = pacman.y;

    switch(pacman.direction) {
        case 0: // Sağ
            newX += pacman.speed;
            break;
        case 90: // Aşağı
            newY += pacman.speed;
            break;
        case 180: // Sol
            newX -= pacman.speed;
            break;
        case 270: // Yukarı
            newY -= pacman.speed;
            break;
    }

    // Duvar kontrolü
    let cellX = Math.floor(newX / CELL_SIZE);
    let cellY = Math.floor(newY / CELL_SIZE);
    if (maze[cellY] && maze[cellY][cellX] !== 1 &&
        maze[Math.floor((newY + PACMAN_SIZE / 2) / CELL_SIZE)][Math.floor((newX + PACMAN_SIZE / 2) / CELL_SIZE)] !== 1 &&
        maze[Math.floor((newY - PACMAN_SIZE / 2) / CELL_SIZE)][Math.floor((newX - PACMAN_SIZE / 2) / CELL_SIZE)] !== 1) {
        pacman.x = newX;
        pacman.y = newY;
    }

    // Yem yeme kontrolü
    for (let i = pellets.length - 1; i >= 0; i--) {
        let pellet = pellets[i];
        if (Math.abs(pacman.x - pellet.x) < CELL_SIZE / 2 && Math.abs(pacman.y - pellet.y) < CELL_SIZE / 2) {
            pellets.splice(i, 1);
            score++;
            document.getElementById('scoreValue').textContent = score;
        }
    }

    // Ağız animasyonu
    pacman.mouthOpen = (pacman.mouthOpen + 1) % 40;
}

function moveGhosts() {
    ghosts.forEach(ghost => {
        let possibleDirections = [];
        [[0, -1], [1, 0], [0, 1], [-1, 0]].forEach(([dx, dy], index) => {
            let newX = ghost.x + dx * ghost.speed;
            let newY = ghost.y + dy * ghost.speed;
            let cellX = Math.floor(newX / CELL_SIZE);
            let cellY = Math.floor(newY / CELL_SIZE);
            if (maze[cellY] && maze[cellY][cellX] !== 1 &&
                maze[Math.floor((newY + GHOST_SIZE / 2) / CELL_SIZE)][Math.floor((newX + GHOST_SIZE / 2) / CELL_SIZE)] !== 1 &&
                maze[Math.floor((newY - GHOST_SIZE / 2) / CELL_SIZE)][Math.floor((newX - GHOST_SIZE / 2) / CELL_SIZE)] !== 1) {
                possibleDirections.push(index * 90);
            }
        });

        if (possibleDirections.length > 0) {
            if (Math.random() < 0.05 || possibleDirections.indexOf(ghost.direction) === -1) {
                ghost.direction = possibleDirections[Math.floor(Math.random() * possibleDirections.length)];
            }
        }

        switch(ghost.direction) {
            case 0: // Sağ
                ghost.x += ghost.speed;
                break;
            case 90: // Aşağı
                ghost.y += ghost.speed;
                break;
            case 180: // Sol
                ghost.x -= ghost.speed;
                break;
            case 270: // Yukarı
                ghost.y -= ghost.speed;
                break;
        }

        // Pacman ile çarpışma kontrolü
        if (Math.abs(ghost.x - pacman.x) < CELL_SIZE / 2 && Math.abs(ghost.y - pacman.y) < CELL_SIZE / 2) {
            lives--;
            document.getElementById('livesValue').textContent = lives;
            if (lives <= 0) {
                alert('Oyun Bitti! Skorunuz: ' + score);
                resetGame();
            } else {
                resetPositions();
            }
        }
    });
}

function resetPositions() {
    pacman.x = CELL_SIZE * 1.5;
    pacman.y = CELL_SIZE * 1.5;
    pacman.direction = 0;

    ghosts.forEach((ghost, index) => {
        ghost.x = CELL_SIZE * (9.5 + index);
        ghost.y = CELL_SIZE * 9.5;
        ghost.direction = 0;
    });
}

function resetGame() {
    score = 0;
    lives = 3;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('livesValue').textContent = lives;
    resetPositions();
    initPellets();
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPellets();
    movePacman();
    moveGhosts();
    drawPacman();
    drawGhosts();
    requestAnimationFrame(updateGame);
}

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            pacman.direction = 180;
            break;
        case 'ArrowRight':
            pacman.direction = 0;
            break;
        case 'ArrowUp':
            pacman.direction = 270;
            break;
        case 'ArrowDown':
            pacman.direction = 90;
            break;
    }
});

// Mobil kontroller
document.getElementById('leftButton').addEventListener('click', () => pacman.direction = 180);
document.getElementById('rightButton').addEventListener('click', () => pacman.direction = 0);
document.getElementById('upButton').addEventListener('click', () => pacman.direction = 270);
document.getElementById('downButton').addEventListener('click', () => pacman.direction = 90);

initPellets();
updateGame();
