const inicio = document.getElementById("inicio");
const pregunta1 = document.getElementById("pregunta1");
const pregunta2 = document.getElementById("pregunta2");
const pregunta3 = document.getElementById("pregunta3");
const vea = document.getElementById("vea");
const puzzle = document.getElementById("puzzle");
const grid = document.getElementById("grid");

let noCount = 0;

// CONTRASEÑA
document.getElementById("entrar").onclick = () => {
    if (document.getElementById("password").value === "TEAMO") {
        inicio.classList.add("oculto");
        pregunta1.classList.remove("oculto");
    } else {
        alert("Contraseña incorrecta");
    }
};

// NO pregunta 1
document.getElementById("no1").onclick = () => {
    noCount++;
    if (noCount < 3) {
        document.getElementById("no1").style.transform = `scale(${1 - noCount * 0.2})`;
    } else {
        pregunta1.classList.add("oculto");
        vea.classList.remove("oculto");
        setTimeout(() => location.reload(), 2000);
    }
};

// SI pregunta 1
document.getElementById("si1").onclick = () => {
    pregunta1.classList.add("oculto");
    pregunta2.classList.remove("oculto");
};

// PREGUNTA 2
document.getElementById("seguroseguro").onclick = () => {
    pregunta2.classList.add("oculto");
    pregunta3.classList.remove("oculto");
};

document.getElementById("soloseguro").onclick = () => {
    pregunta2.classList.add("oculto");
    pregunta3.classList.remove("oculto");
};

// PREGUNTA 3
document.getElementById("tengoOtra").onclick = () => {
    pregunta3.classList.add("oculto");
    vea.classList.remove("oculto");
    setTimeout(() => location.reload(), 2000);
};

document.getElementById("segurisimo").onclick = () => {
    pregunta3.classList.add("oculto");
    puzzle.classList.remove("oculto");
    crearPuzzle();
};

// PUZZLE 3x3
function crearPuzzle() {
    grid.innerHTML = "";
    let piezas = [];

    for (let y = 0; y < 3; y++) {
        for (let x = 0; x < 3; x++) {
            piezas.push({ x, y });
        }
    }

    piezas.sort(() => Math.random() - 0.5);

    piezas.forEach(p => {
        const div = document.createElement("div");
        div.className = "pieza";
        div.style.backgroundPosition = `-${p.x * 90}px -${p.y * 90}px`;
        grid.appendChild(div);
    });
}
