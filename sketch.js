let frase = " Se o campo não planta, a cidade não janta.";
let letras = [];
let xTrator = 700;
let milhos = [];
let liberarMilho = false;
function setup() {
createCanvas(800, 600);
textFont("Broadway");
textAlign(CENTER, CENTER);
angleMode(DEGREES);
letras = frase.split("");
}
function draw() {
background(255);
// Céu
fill("#05DBF7");
noStroke();
rect(0, 0, 800, 300);
// Prédios
textSize(60);
text("🏘", 650, 262);
textSize(80);
text("🏭", 720, 250);
// Árvores
fill("rgb(13,255,13)");
ellipse(100, 300, 150, 100);
ellipse(200, 300, 150, 100);
ellipse(340, 290, 150, 100);
ellipse(480, 310, 150, 100);
// Terra
fill("#795548");
noStroke();
rect(0, 300, 800, 300);
// Trator
strokeWeight(2);
fill("#CF11F0");

textStyle(BOLD);
textSize(60);
text("🚛", xTrator, 350);
if (xTrator > -50) {
xTrator -= 2;
} else {
liberarMilho = true;
}
// Título
textSize(30);
text("Conexão campo-cidade", width / 2, 50);
// Milhos voadores
if (liberarMilho) {
// adiciona milhos aleatoriamente
if (frameCount % 5 === 0 && milhos.length < 20) {
milhos.push({ x: 0, y: random(300), alvoX: 700, alvoY: 300 });
}
// desenha e move os milhos
for (let i = 0; i < milhos.length; i++) {
let milho = milhos[i];
textSize(30);
text("🥔", milho.x, milho.y);
// move suavemente até o destino
milho.x = lerp(milho.x, milho.alvoX, 0.02);
milho.y = lerp(milho.y, milho.alvoY, 0.02);
}
}
// Círculo de letras
textSize(30);
push();
translate(width / 2, height / 2 + 50);
rotate(frameCount * 0.5);
let raio = 150;
let anguloPorLetra = 360 / letras.length;
for (let i = 0; i < letras.length; i++) {
let ang = i * anguloPorLetra - 90;

let x = cos(ang) * raio;
let y = sin(ang) * raio;
push();
translate(x, y);
rotate(ang + 90);
text(letras[i], 0, 0);
pop();
}
pop();
}