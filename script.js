// Variables y elementos
let guestData = [];
let numRones = 0;

const btnMr = document.getElementById("btnMr");
const btnGuest = document.getElementById("btnGuest");
const loginMr = document.getElementById("mrLogin");
const guestRegister = document.getElementById("guestRegister");
const guestVoting = document.getElementById("guestVoting");
const mrResults = document.getElementById("mrResults");
const passwordMr = document.getElementById("passwordMr");
const btnLoginMr = document.getElementById("btnLoginMr");
const btnRegisterGuest = document.getElementById("btnRegisterGuest");
const submitGuestVote = document.getElementById("submitGuestVote");
const btnEndCata = document.getElementById("btnEndCata");
const guestMessage = document.getElementById("guestMessage");
const resultsData = document.getElementById("resultsData");

// Mostrar registro de invitados
btnGuest.addEventListener("click", () => {
    guestRegister.classList.remove("hidden");
    loginMr.classList.add("hidden");
});

// Registrar invitados y preparar votación
btnRegisterGuest.addEventListener("click", () => {
    const name = document.getElementById("guestName").value;
    const lastName = document.getElementById("guestLastName").value;
    numRones = parseInt(document.getElementById("guestRones").value);

    if (name && lastName && numRones > 0) {
        guestData.push({ name, lastName, numRones, scores: [] });
        alert(`Invitado registrado: ${name} ${lastName} - ${numRones} rones a catar.`);
        guestRegister.classList.add("hidden");
        guestVoting.classList.remove("hidden");
        guestMessage.classList.add("hidden");
    } else {
        alert("Complete todos los campos correctamente.");
    }
});

// Guardar puntuaciones de invitados
submitGuestVote.addEventListener("click", () => {
    const purity = parseInt(document.getElementById("purity").value);
    const view = parseInt(document.getElementById("view").value);
    const taste = parseInt(document.getElementById("taste").value);
    const olfactory = parseInt(document.getElementById("olfactory").value);

    if (purity && view && taste && olfactory && numRones > 0) {
        const total = purity + view + taste + olfactory;
        guestData[guestData.length - 1].scores.push(total);
        numRones--;
        alert(`Puntuación registrada: ${total}. Rones restantes: ${numRones}`);

        // Reiniciar campos de votación
        document.getElementById("purity").value = "";
        document.getElementById("view").value = "";
        document.getElementById("taste").value = "";
        document.getElementById("olfactory").value = "";

        if (numRones === 0) {
            guestVoting.classList.add("hidden");
            guestMessage.textContent = "Cata finalizada. Gracias por participar.";
            guestMessage.classList.remove("hidden");
        }
    } else {
        alert("Complete todos los campos correctamente.");
    }
});

// Mostrar resultados al Maestro Ronero
btnLoginMr.addEventListener("click", () => {
    if (passwordMr.value === "2001") {
        alert("Bienvenido, Maestro Ronero.");
        loginMr.classList.add("hidden");
        mrResults.classList.remove("hidden");
        const resultsHTML = guestData.map(
            guest =>
                `<p>${guest.name} ${guest.lastName}: ${guest.scores.join(", ")}</p>`
        ).join("");
        resultsData.innerHTML = resultsHTML;
    } else {
        alert("Clave incorrecta.");
    }
});

// Finalizar la cata
btnEndCata.addEventListener("click", () => {
    alert("Cata finalizada.");
    mrResults.classList.add("hidden");
});
