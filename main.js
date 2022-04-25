// main.js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (x = 0; x <= canvas.width; x += 50) {
    for (y = 0; y <= canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.width);
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.height, y);
      ctx.stroke();
    }
  }
}

function drawPlayer() {
  const player = new Image();
  player.src = "./images/character-down.png";
  player.onload = () => ctx.drawImage(player, 200, 100, 50, 50);
}
function drawTreasure() {
  const treasure = new Image();
  treasure.src = "./images/treasure.png";
  treasure.onload = () => ctx.drawImage(treasure, 0, 0, 50, 50);
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();
