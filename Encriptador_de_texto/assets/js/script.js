const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const munheco = document.getElementById("munheco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth");
const darkModeToggle = document.getElementById("darkModeToggle");

// Función para reemplazar el texto
const remplace = (newvalue) => {
    textFinal.innerHTML = newvalue;
    textFinal.classList.add("ajustar");
    rigth.classList.add("ajuste");
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textoInicial.placeholder = "Ingrese el texto aquí";
    munheco.classList.add("ocultar");
    textInfo.classList.add("ocultar");
    copy.classList.remove("bn_ocultar");
};

// Función para reiniciar la vista
const reset = () => {
    textoInicial.value = "";
    textoInicial.style.height = "auto";
    textFinal.innerHTML = "";
    rigth.classList.remove("ajuste");
    textFinal.classList.remove("ajustar");
    munheco.classList.remove("ocultar");
    textFinal.placeholder = "Ningún mensaje fue encontrado";
    textInfo.classList.remove("ocultar");
    copy.classList.add("bn_ocultar");
    textoInicial.focus();
};

// Reglas de reemplazo
let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

// Función para encriptar el texto
encriptar.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function encript(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][0])) {
                    newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
                }
            }
            return newtext;
        }
        remplace(encript(texto));
    } else {
        alert("Ingrese texto para encriptar");
        reset();
    }
});

// Función para desencriptar el texto
desencriptar.addEventListener('click', () => {
    const texto = textoInicial.value.toLowerCase();

    if (texto != "") {
        function desencript(newtext) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newtext.includes(remplazar[i][1])) {
                    newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
                }
            }
            return newtext;
        }
        remplace(desencript(texto));
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
});

// Función para copiar el texto al portapapeles
copy.addEventListener("click", () => {
    textFinal.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    reset();
});

// Ajustar la altura del textarea al cambiar o escribir
textoInicial.addEventListener("change", e => {
    textoInicial.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textoInicial.style.height = `${scHeight}px`;
});

textoInicial.addEventListener("keyup", e => {
    textoInicial.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textoInicial.style.height = `${scHeight}px`;
});

// Alternar el modo oscuro
document.addEventListener('DOMContentLoaded', () => {
    const darkModeCss = document.getElementById('dark-mode-css');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    darkModeCss.disabled = !isDarkMode;
    darkModeToggle.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";

    darkModeToggle.addEventListener("click", () => {
        darkModeCss.disabled = !darkModeCss.disabled;
        const isDarkMode = !darkModeCss.disabled;
        localStorage.setItem('dark-mode', isDarkMode);
        darkModeToggle.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
    });
});
