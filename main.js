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
  const playerDown = new Image();
  playerDown.src = "./images/character-down.png";
  ctx.drawImage(playerDown, 200, 200, 50, 50);

  const playerLeft = new Image();
  playerLeft.src = "./images/character-left.png";
  ctx.drawImage(playerLeft, 100, 100, 50, 50);

  const playerRight = new Image();
  playerRight.src = "./images/character-right.png";
  ctx.drawImage(playerRight, 150, 150, 50, 50);

  const playerUp = new Image();
  playerUp.src = "./images/character-up.png";
  ctx.drawImage(playerUp, 300, 300, 50, 50);
}
drawPlayer();


class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.row -= 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}

class Treasure {
  constructor(x, y) {
   this.x = x;
   this.y= y;
   this.setRandomPosition()
  }

  draw() {
    const treasure = new Image();
    treasure.src = "./images/treasure.png";
    treasure.onload = () => ctx.drawImage(treasure, this.x,this.y, 50, 50);

  }

  setRandomPosition(){
      this.x = Math.floor(Math.random() * 10) * 50;
      this.y = Math.floor(Math.random() * 10) * 50;
  }
}


const character = new Character()
const treasure = new Treasure()

function drawEverything() {
    drawGrid();
    drawPlayer();
    treasure.draw();
  }

  
window.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      console.log("left");
      break;
    case 38:
      console.log("up");
      break;
    case 39:
      console.log("right");
      break;
    case 40:
      console.log("down");
      break;
  }
});

window.onload = ()=>drawEverything();
