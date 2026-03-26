document.addEventListener('DOMContentLoaded', function () {
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

  botaoDeAcessibilidade.addEventListener('click', function () {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
  });

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');

  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
  });

  alternaContraste.addEventListener('click', function () {
    document.body.classList.toggle('alto-contraste');
  });
});

ScrollReveal().reveal('#inicio', { delay: 500, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#sobre', { delay: 600, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#galeria', { delay: 700, origin: 'right', distance: '50px' });
ScrollReveal().reveal('#contato', { delay: 800, origin: 'bottom', distance: '50px' });

const canvas = document.getElementById("cyber-bg");
const ctx = canvas.getContext("2d");

let particles = [];
let w, h;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight / 10;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 2,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: Math.random() > 0.5 ? "#ff00ff" : "#00fff7"
    });
  }
}
createParticles();

function animateParticles() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 20;
    ctx.shadowColor = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > w) p.x = Math.random() * w;
    if (p.y < 0 || p.y > h) p.y = Math.random() * h;
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();