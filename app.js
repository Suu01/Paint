const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // brushes - 캔버스에 그림 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();
// ctx.stroke();
