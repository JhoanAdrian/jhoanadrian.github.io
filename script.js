document.addEventListener('DOMContentLoaded', () => {
  const bouncer = document.getElementById("bouncer");
  bouncer.style.width = '98px';
  bouncer.style.height = '30px';

  let x = 100;
  let y = 100;
  let vx = 2;
  let vy = 2;

  // aseguro posición inicial
  bouncer.style.position = 'absolute';
  bouncer.style.left = x + "px";
  bouncer.style.top = y + "px";

  function animate() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = bouncer.offsetWidth;

    x += vx;
    y += vy;

    // Rebote en bordes
    if (x <= 0 || x + size >= w) {
      vx = -vx;
      changeColor();
    }
    if (y <= 0 || y + size >= h) {
      vy = -vy;
      changeColor();
    }

    bouncer.style.left = x + "px";
    bouncer.style.top = y + "px";

    requestAnimationFrame(animate);
  }

  function changeColor() {
    // tint con filter para imágenes
    const hue = Math.floor(Math.random() * 360);
    bouncer.style.filter = `hue-rotate(${hue}deg) saturate(120%)`;
  }

  animate();
});
