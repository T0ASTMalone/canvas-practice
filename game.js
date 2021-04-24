let canvas = document.querySelector("#canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
// const RECT_WIDTH = 200;
// const RECT_HEIGHT = 150;

// const CENTER_X = window.innerWidth / 2 - RECT_WIDTH / 2;
// const CENTER_Y = window.innerHeight / 2 - RECT_HEIGHT / 2;
/* 
  Rectangle
*/
// styles
// ctx.fillStyle = "rgba(255, 127.5, 63, 1)";
// // draw rectangle x,y,width,height
// ctx.fillRect(CENTER_X, CENTER_Y, RECT_WIDTH, RECT_HEIGHT);

/* 
  Line 
*/
// new path start doing so will disconnect from the last path
// ctx.beginPath();
// // path
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);
// // styles
// ctx.strokeStyle = "rgba(255, 0, 0, 1)";
// // draw path
// ctx.stroke();

/* 
  Arc / CIrcle
*/
// // use begin path when starting a new line
// ctx.beginPath();
// // styles. Could use fill here too
// ctx.strokeStyle = "blue";
// // create path for circle takes x, w, radius, angle end, clock wise or not
// ctx.arc(300, 450, 30, 0, Math.PI * 2, false);
// // draw path
// ctx.stroke();

/* 
  Randomized circles
*/
// [...new Array(10)].forEach((a) => drawCircle());
const BALL_RADIUS = 30;
let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 5;
let dy = 5;

function getXAndY() {
  // gets random number within window height and width
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  return { x, y };
}

function drawCirclePath(x, y) {
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, BALL_RADIUS, 0, Math.PI * 2, false);
  ctx.stroke();
}

function drawCircle(x, y) {
  // const { x, y } = getXAndY();

  drawCirclePath(x, y);
}

function animate() {
  // requestAnimationFrame(animate);

  if (x + BALL_RADIUS > window.innerWidth || x - BALL_RADIUS < 0) {
    dx = -dx;
  }

  if (y + BALL_RADIUS > window.innerHeight || y - BALL_RADIUS < 0) {
    dy = -dy;
  }

  y += dy;
  x += dx;

  drawCircle(x, y);
}

animate();
