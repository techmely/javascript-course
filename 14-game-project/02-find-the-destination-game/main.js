const player = document.getElementById("player");
const target = document.getElementById("target");

const step = 50;

const randomPosition = () => {
  const x = Math.floor(Math.random() * 5) * step;
  const y = Math.floor(Math.random() * 5) * step;
  return { x, y };
};

const setRandomTargetPosition = () => {
  const position = randomPosition();
  target.style.left = `${position.x}px`;
  target.style.top = `${position.y}px`;
};

setRandomTargetPosition();

const checkCollision = (player, target) => {
  const playerRect = player.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return (
    playerRect.top === targetRect.top &&
    playerRect.bottom === targetRect.bottom &&
    playerRect.left === targetRect.left &&
    playerRect.right === targetRect.right
  );
};

document.addEventListener("keydown", (event) => {
  const key = event.key;

  const playerTop = parseInt(getComputedStyle(player).top);
  const playerLeft = parseInt(getComputedStyle(player).left);

  if (key === "ArrowUp" && playerTop > 0) {
    player.style.top = `${playerTop - step}px`;
  } else if (key === "ArrowDown" && playerTop < 250) {
    player.style.top = `${playerTop + step}px`;
  } else if (key === "ArrowLeft" && playerLeft > 0) {
    player.style.left = `${playerLeft - step}px`;
  } else if (key === "ArrowRight" && playerLeft < 250) {
    player.style.left = `${playerLeft + step}px`;
  }

  if (checkCollision(player, target)) {
    alert("You win!");
    setRandomTargetPosition();
  }
});
