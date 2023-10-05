const leftTrace = document.getElementById("left-trace");
const rightTrace = document.getElementById("right-trace");
const ball = document.getElementById("ball");

let ballX = 50; // Posição inicial da bola
let ballY = 50;
let ballSpeedX = 2; // Velocidade da bola em X
let ballSpeedY = 2; // Velocidade da bola em Y

let leftTraceY = 160; // Posição inicial do traço da esquerda
let rightTraceY = 160; // Posição inicial do traço da direita

document.addEventListener("keydown", moveTraces);

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Verificar colisão com as bordas superior e inferior
    if (ballY <= 0 || ballY >= 400) {
        ballSpeedY = -ballSpeedY;
    }

    // Verificar colisão com os traços
    if (
        (ballX <= 20 && ballY >= leftTraceY && ballY <= leftTraceY + 80) ||
        (ballX >= 360 && ballY >= rightTraceY && ballY <= rightTraceY + 80)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    // Verificar vitória ou derrota
    if (ballX <= 0 || ballX >= 400) {
        alert("Fim de jogo!");
        resetGame();
    }

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(moveBall);
}

function moveTraces(event) {
    // Movimento do traço da esquerda (W e S)
    if (event.key === "w" && leftTraceY > 0) {
        leftTraceY -= 10;
        leftTrace.style.top = leftTraceY + "px";
    } else if (event.key === "s" && leftTraceY < 320) {
        leftTraceY += 10;
        leftTrace.style.top = leftTraceY + "px";
    }

    // Movimento do traço da direita (setas para cima e para baixo)
    if (event.key === "ArrowUp" && rightTraceY > 0) {
        rightTraceY -= 10;
        rightTrace.style.top = rightTraceY + "px";
    } else if (event.key === "ArrowDown" && rightTraceY < 320) {
        rightTraceY += 10;
        rightTrace.style.top = rightTraceY + "px";
    }
}

function resetGame() {
    ballX = 50;
    ballY = 50;
    ballSpeedX = 2;
    ballSpeedY = 2;
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";
    leftTraceY = 160;
    rightTraceY = 160;
    leftTrace.style.top = leftTraceY + "px";
    rightTrace.style.top = rightTraceY + "px";
}

moveBall();
