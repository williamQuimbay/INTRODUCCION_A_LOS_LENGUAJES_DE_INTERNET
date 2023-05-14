const form = document.querySelector('form') as HTMLFormElement;
const nombreInput = document.querySelector('#nombre') as HTMLInputElement;
const emailInput = document.querySelector('#email') as HTMLInputElement;
const mensajeInput = document.querySelector('#mensaje') as HTMLTextAreaElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nombre = nombreInput.value;
  const email = emailInput.value;
  const mensaje = mensajeInput.value;
  
  console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
});
