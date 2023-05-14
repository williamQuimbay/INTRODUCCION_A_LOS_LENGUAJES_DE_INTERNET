"use strict";
const form = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
});
//# sourceMappingURL=main.js.map