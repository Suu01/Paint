const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // brushes - 캔버스에 그림 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(215, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 150, 40, 0, 2 * Math.PI);
// ctx.arc(290, 150, 40, 0, 0.5 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(275, 140, 7, Math.PI, 2 * Math.PI);
ctx.arc(305, 140, 7, Math.PI, 2 * Math.PI);
ctx.fill();
