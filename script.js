<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cata de Rones</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Cata de Rones</h1>
        <p>Maestro Ronero y Análisis Sensorial</p>
    </header>

    <main>
        <!-- Selección de usuario -->
        <section id="welcome">
            <h2>Seleccione su Rol</h2>
            <div class="buttons">
                <button id="btnMr">Maestro Ronero</button>
                <button id="btnGuest">Invitado</button>
            </div>
        </section>

        <!-- Vista del Maestro Ronero -->
        <section id="mrLogin" class="hidden">
            <h2>Acceso para el Maestro Ronero</h2>
            <input type="password" id="passwordMr" placeholder="Clave de Admin">
            <button id="btnLoginMr">Iniciar Sesión</button>
            <p id="mrError" class="error hidden">Clave incorrecta, intenta de nuevo.</p>
        </section>

        <!-- Registro de Invitados -->
        <section id="guestRegister" class="hidden">
            <h2>Registro de Invitados</h2>
            <input type="text" id="guestName" placeholder="Nombre">
            <input type="text" id="guestLastName" placeholder="Apellido">
            <label for="guestRones">Cantidad de rones a catar:</label>
            <input type="number" id="guestRones" min="1" max="10">
            <button id="btnRegisterGuest">Registrarse</button>
        </section>

        <!-- Votación de invitados -->
        <section id="guestVoting" class="hidden">
            <h2>Votación</h2>
            <label for="purity">Pureza:</label>
            <input type="number" id="purity" min="2" max="10"><br>
            <label for="view">Vista:</label>
            <input type="number" id="view" min="2" max="10"><br>
            <label for="taste">Gusto:</label>
            <input type="number" id="taste" min="4" max="20"><br>
            <label for="olfactory">Olfato:</label>
            <input type="number" id="olfactory" min="2" max="25"><br>
            <button id="submitGuestVote">Enviar Puntuación</button>
            <p id="guestMessage" class="hidden"></p>
        </section>

        <!-- Resultados para el Maestro Ronero -->
        <section id="mrResults" class="hidden">
            <h2>Resultados</h2>
            <p id="resultsData"></p>
            <button id="btnEndCata">Finalizar Cata</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Maestro Ronero - Asociación Iberoamericana de Ronmeliers</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
