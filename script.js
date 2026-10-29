// Muestra un aviso de ejemplo sin enviar información a un servidor.
const formulario = document.getElementById('formulario');
const aviso = document.getElementById('aviso');
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  aviso.textContent = 'Mensaje de ejemplo registrado. Este formulario es una demostración.';
});
formulario.addEventListener('reset', function () {
  aviso.textContent = '';
});
