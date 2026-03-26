const textos = [".NET Junior", "C# Developer", "Backend Developer"];
let index = 0;
let charIndex = 0;
let borrando = false;

const elemento = document.getElementById("texto-multiple");

function escribir() {
    let textoActual = textos[index];

    if (!borrando) {
        elemento.textContent = textoActual.substring(0, charIndex++);
        
        if (charIndex > textoActual.length) {
            borrando = true;
            setTimeout(escribir, 1500);
            return;
        }
    } else {
        elemento.textContent = textoActual.substring(0, charIndex--);
        
        if (charIndex === 0) {
            borrando = false;
            index = (index + 1) % textos.length;
        }
    }

    setTimeout(escribir, borrando ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", escribir);