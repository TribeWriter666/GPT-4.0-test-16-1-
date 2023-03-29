const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numWalkers = 100;

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = `hsla(${Math.random() * 360}, 100%, 50%, 0.05)`;
  }

  update() {
    const dx = Math.round(Math.random() * 2 - 1);
    const dy = Math.round(Math.random() * 2 - 1);

    this.x = (this.x + dx + canvas.width) % canvas.width;
    this.y = (this.y + dy + canvas.height) % canvas.height;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}

const walkers = Array.from({ length: numWalkers }, () => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  return new Walker(x, y);
});

function animate() {
  walkers.forEach((walker) => {
    walker.update();
    walker.draw();
  });

  requestAnimationFrame(animate);
}

animate();
