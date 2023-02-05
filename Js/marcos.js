const texto = document.getElementById("texto");
const contenedor = document.getElementsByName("dchaizq");
const escribir = document.getElementById("escribir");
const reiniciar = document.getElementById("reiniciar");
const mensaje = document.getElementById("mensaje");

escribir.addEventListener("click", () => {
  if (!validarTexto(texto)) return;

  let frame = "frameIzquierdo";
  if (contenedor[1].checked) frame = "frameDerecho";
  addTexto(frame);

  vaciarCampos();
});

function addTexto(nombreFrame) {
  const frame = document.getElementById(nombreFrame);
  const iframe = frame.contentWindow.document;
  const parrafo = iframe.createElement("p");
  const t = iframe.createTextNode(texto.value);
  parrafo.appendChild(t);
  iframe.body.appendChild(parrafo);
}

function vaciarCampos() {
  texto.value = "";
}

function validarTexto(campo) {
  if (campo.value == "") {
    mensaje.innerHTML =
      "<div class='alert alert-danger alert-dismissible fade show' role='alert'>" +
      `El campo <b> ${campo.title} </b> no puede estar vacío` +
      "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>" +
      "</div>";
    return false;
  }
  return true;
}

reiniciar.addEventListener("click", () => location.reload());