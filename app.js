const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // brushes - 캔버스에 그림 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2; // 위에 써주기
ctx.strokeRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);

ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
