// Variables Globales
let globalRonCount = 0;
let guests = [];
let currentGuest = null; // Índice del invitado actual en el array

// Elementos del DOM
const welcomeSection = document.getElementById("welcome");
const btnMr = document.getElementById("btnMr");
const btnGuest = document.getElementById("btnGuest");

const mrLoginSection = document.getElementById("mrLogin");
const passwordMrInput = document.getElementById("passwordMr");
const btnLoginMr = document.getElementById("btnLoginMr");
const mrError = document.getElementById("mrError");

const setupCataSection = document.getElementById("setupCata");
const numRonesInput = document.getElementById("numRones");
const btnStartCata = document.getElementById("btnStartCata");

const mrResultsSection = document.getElementById("mrResults");
const resultsDataDiv = document.getElementById("resultsData");
const btnRefresh = document.getElementById("btnRefresh");
const btnEndCata = document.getElementById("btnEndCata");

const guestRegisterSection = document.getElementById("guestRegister");
const guestNameInput = document.getElementById("guestName");
const guestLastNameInput = document.getElementById("guestLastName");
const btnRegisterGuest = document.getElementById("btnRegisterGuest");
const globalRonDisplaySpan = document.getElementById("globalRonDisplay");

const guestVotingSection = document.getElementById("guestVoting");
const remainingVotesText = document.getElementById("remainingVotesText");
const purityInput = document.getElementById("purity");
const viewInput = document.getElementById("view");
const tasteInput = document.getElementById("taste");
const olfactoryInput = document.getElementById("olfactory");
const btnSubmitGuestVote = document.getElementById("btnSubmitGuestVote");
const guestVoteMessage = document.getElementById("guestVoteMessage");

// EVENTS

// Desde la sección de Bienvenida
btnMr.addEventListener("click", () => {
  welcomeSection.classList.add("hidden");
  mrLoginSection.classList.remove("hidden");
});

btnGuest.addEventListener("click", () => {
  if (globalRonCount > 0) {
    welcomeSection.classList.add("hidden");
    guestRegisterSection.classList.remove("hidden");
    globalRonDisplaySpan.textContent = globalRonCount;
  } else {
    alert("La cata aún no ha sido configurada por el Maestro Ronero.");
  }
});

// Login del MR
btnLoginMr.addEventListener("click", () => {
  if (passwordMrInput.value === "2001") {
    mrError.classList.add("hidden");
    mrLoginSection.classList.add("hidden");
    setupCataSection.classList.remove("hidden");
  } else {
    mrError.classList.remove("hidden");
  }
});

// Configurar la Cata (MR)
btnStartCata.addEventListener("click", () => {
  let count = parseInt(numRonesInput.value);
  if (!isNaN(count) && count > 0) {
    globalRonCount = count;
    alert(`Se configuró la cata para ${globalRonCount} rones.`);
    setupCataSection.classList.add("hidden");
    // Opcional: mostrar_panel de resultados para MR
    mrResultsSection.classList.remove("hidden");
    displayResults();
  } else {
    alert("Ingrese un número válido de rones.");
  }
});

// Registro de Invitado
btnRegisterGuest.addEventListener("click", () => {
  const name = guestNameInput.value.trim();
  const lastName = guestLastNameInput.value.trim();
  if (name && lastName) {
    // Crear objeto de invitado
    const guest = {
      name: name,
      lastName: lastName,
      remainingVotes: globalRonCount,
      scores: []
    };
    guests.push(guest);
    currentGuest = guests.length - 1;
    alert(`Invitado ${name} ${lastName} registrado. Debe votar ${globalRonCount} veces.`);
    guestRegisterSection.classList.add("hidden");
    guestVotingSection.classList.remove("hidden");
    updateRemainingVotesText();
  } else {
    alert("Complete nombre y apellido.");
  }
});

// Función para actualizar el contador de votos pendientes para el invitado
function updateRemainingVotesText() {
  const rem = guests[currentGuest].remainingVotes;
  remainingVotesText.textContent = `Rones restantes: ${rem}`;
}

// Votación del Invitado
btnSubmitGuestVote.addEventListener("click", () => {
  const purity = parseInt(purityInput.value);
  const view = parseInt(viewInput.value);
  const taste = parseInt(tasteInput.value);
  const olfactory = parseInt(olfactoryInput.value);

  if (!isNaN(purity) && !isNaN(view) && !isNaN(taste) && !isNaN(olfactory)) {
    const total = purity + view + taste + olfactory;
    guests[currentGuest].scores.push(total);
    guests[currentGuest].remainingVotes--;
    alert(`Puntuación registrada: ${total}`);
    // Reiniciar los campos de votación
    purityInput.value = "";
    viewInput.value = "";
    tasteInput.value = "";
    olfactoryInput.value = "";
    updateRemainingVotesText();

    if (guests[currentGuest].remainingVotes === 0) {
      guestVotingSection.classList.add("hidden");
      guestVoteMessage.textContent = "Cata finalizada. Gracias por participar.";
      guestVoteMessage.classList.remove("hidden");
    }
  } else {
    alert("Complete todos los campos de votación.");
  }
});

// Actualizar Resultados para el MR
btnRefresh.addEventListener("click", () => {
  displayResults();
});

// Función para desplegar resultados
function displayResults() {
  if (guests.length === 0) {
    resultsDataDiv.innerHTML = "<p>No hay resultados aún.</p>";
    return;
  }
  let html = "";
  guests.forEach(guest => {
    html += `<p><strong>${guest.name} ${guest.lastName}</strong>: ${guest.scores.join(", ")}</p>`;
  });
  resultsDataDiv.innerHTML = html;
}

// Finalizar Cata (MR)
btnEndCata.addEventListener("click", () => {
  if (confirm("¿Está seguro de finalizar la cata? Se reiniciarán los datos.")) {
    globalRonCount = 0;
    guests = [];
    currentGuest = null;
    // Ocultar paneles y mostrar bienvenida
    mrResultsSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
    // Limpiar campos para seguridad
    numRonesInput.value = "";
    passwordMrInput.value = "";
    guestNameInput.value = "";
    guestLastNameInput.value = "";
    purityInput.value = "";
    viewInput.value = "";
    tasteInput.value = "";
    olfactoryInput.value = "";
    alert("Cata finalizada y datos reiniciados.");
  }
});
