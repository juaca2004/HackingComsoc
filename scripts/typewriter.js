// typewriter.js
const text = `En las sombras digitales donde los datos susurran secretos,
solo aquellos que dominan el arte del código verdadero
pueden descifrar los misterios ocultos en este laberinto virtual.

Tres puertas se abren ante ti. Cada una guarda un reto:
- Reto 1: AI / Prompt Injection
- Reto 2: SQL Injection 
- Reto 3: W3Challs (crypto)

Captura evidencia en screenshots y demuestra tu habilidad.
Las primeras 3 personas que envien evidencia de haber completado los 3 retos se llevaran un premio.
Envia la evidencia al siguiente link.
El tiempo no espera. La prueba comienza ahora.

`;

let i = 0;
const el = document.getElementById ? document.getElementById('typewriter') : null;

function typeWriter() {
  if (!el) return;
  if (i < text.length) {
    const ch = text.charAt(i);
    // Occasionally wrap a character in a 'glitch' span
    if (Math.random() < 0.035 && ch.trim() !== '') {
      el.innerHTML += '<span class="glitch">' + ch + '</span>';
    } else {
      el.innerHTML += ch;
    }
    i++;
    // speed
    setTimeout(typeWriter, 35 + Math.floor(Math.random()*40));
    // auto-scroll terminal if overflow
    el.parentElement.scrollTop = el.parentElement.scrollHeight;
  }
}

window.addEventListener('load', typeWriter);
