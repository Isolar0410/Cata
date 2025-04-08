// Selección de elementos
const btnMr = document.getElementById("btnMr");
const btnGuest = document.getElementById("btnGuest");
const loginMr = document.getElementById("mrLogin");
const guestRegister = document.getElementById("guestRegister");
const passwordMr = document.getElementById("passwordMr");
const btnLoginMr = document.getElementById("btnLoginMr");
const mrError = document.getElementById("mrError");

// Mostrar formulario del Maestro Ronero
btnMr.addEventListener("click", () => {
    loginMr.classList.remove("hidden");
    guestRegister.classList.add("hidden");
});

// Mostrar formulario del Invitado
btnGuest.addEventListener("click", () => {
    guestRegister.classList.remove("hidden");
    loginMr.classList.add("hidden");
});

// Validar clave del Maestro Ronero
btnLoginMr.addEventListener("click", () => {
    if (passwordMr.value === "2001") {
        alert("Bienvenido, Maestro Ronero.");
        loginMr.classList.add("hidden");
        // Aquí podemos añadir más funcionalidades
    } else {
        mrError.classList.remove("hidden");
    }
});

// Registro de Invitados
document.getElementById("btnRegisterGuest").addEventListener("click", () => {
    const name = document.getElementById("guestName").value;
    const lastName = document.getElementById("guestLastName").value;
    if (name && lastName) {
        alert(`Registro exitoso: ${name} ${lastName}`);
        guestRegister.classList.add("hidden");
        // Aquí podemos pasar a la sección de puntuación
    } else {
        alert("Completa todos los campos.");
    }
});
