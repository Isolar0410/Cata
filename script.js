// Variables y elementos
let totalScores = [];
let numRones;
let ronCategory = "";

const btnMr = document.getElementById("btnMr");
const btnGuest = document.getElementById("btnGuest");
const loginMr = document.getElementById("mrLogin");
const setupCata = document.getElementById("setupCata");
const voting = document.getElementById("voting");
const results = document.getElementById("results");
const passwordMr = document.getElementById("passwordMr");
const btnLoginMr = document.getElementById("btnLoginMr");
const btnStartCata = document.getElementById("btnStartCata");
const submitVote = document.getElementById("submitVote");
const btnEndCata = document.getElementById("btnEndCata");

// Mostrar login del Maestro Ronero
btnMr.addEventListener("click", () => {
    loginMr.classList.remove("hidden");
});

// Validar el MR y pasar a configuración
btnLoginMr.addEventListener("click", () => {
    if (passwordMr.value === "2001") {
        alert("Bienvenido, Maestro Ronero.");
        loginMr.classList.add("hidden");
        setupCata.classList.remove("hidden");
    } else {
        alert("Clave incorrecta.");
    }
});

// Configurar número de rones y mostrar votación
btnStartCata.addEventListener("click", () => {
    numRones = parseInt(document.getElementById("numRones").value);
    if (numRones > 0) {
        alert(`Se catarán ${numRones} rones.`);
        setupCata.classList.add("hidden");
        voting.classList.remove("hidden");
    } else {
        alert("Ingrese un número válido.");
    }
});

// Registrar votación
submitVote.addEventListener("click", () => {
    const purity = parseInt(document.getElementById("purity").value);
    const view = parseInt(document.getElementById("view").value);
    const taste = parseInt(document.getElementById("taste").value);
    const olfactory = parseInt(document.getElementById("olfactory").value);

    if (purity && view && taste && olfactory) {
        const total = purity + view + taste + olfactory;
        totalScores.push(total);
        alert(`Puntuación registrada: ${total}`);
    } else {
        alert("Complete todos los campos.");
    }
});

// Finalizar cata y mostrar resultados
btnEndCata.addEventListener("click", () => {
    const averageScore = totalScores.reduce((a, b) => a + b, 0) / totalScores.length;

    if (averageScore < 50) ronCategory = "Low Price";
    else if (averageScore <= 67) ronCategory = "Value";
    else if (averageScore <= 72) ronCategory = "Standard";
    else if (averageScore <= 77) ronCategory = "Premium";
    else if (averageScore <= 82) ronCategory = "Super Premium";
    else if (averageScore <= 91) ronCategory = "Extra Premium";
    else ronCategory = "Ultra Premium";

    document.getElementById("finalResults").textContent = `Promedio: ${averageScore} - Categoría: ${ronCategory}`;
    results.classList.remove("hidden");
});
