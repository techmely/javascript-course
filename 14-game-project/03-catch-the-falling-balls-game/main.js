const player = document.getElementById("player");
const ball = document.getElementById("ball");
const gameContainer = document.querySelector(".game-container");
const scoreDisplay = document.getElementById("score");
let score = 0;

let playerX = 175;
let ballX = Math.random() * 370;
let ballY = 0;

player.style.left = playerX + "px";
ball.style.left = ballX + "px";

function isCollision(player, ball) {
  const playerRect = player.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  return (
    playerRect.top <= ballRect.bottom &&
    playerRect.bottom >= ballRect.top &&
    playerRect.left <= ballRect.right &&
    playerRect.right >= ballRect.left
  );
}

function updateGameArea() {
  if (ballY > 370) {
    ballX = Math.random() * 370;
    ballY = 0;
  }

  ballY += 5;

  player.style.left = playerX + "px";
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (isCollision(player, ball)) {
    ballX = Math.random() * 370;
    ballY = 0;
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  requestAnimationFrame(updateGameArea);
}

gameContainer.addEventListener("mousemove", (e) => {
  playerX = e.clientX - gameContainer.getBoundingClientRect().left - 25;
});

updateGameArea();
