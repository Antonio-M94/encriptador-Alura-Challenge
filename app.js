const textoProcesado = document.getElementById('texto-procesado');
const textoProcesadoP = document.getElementById('texto-procesado-p');
const textoProcesadoOff = document.getElementById('texto-procesado-off');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const texto = document.getElementById('texto');
const btnCopiar = document.getElementById('btn-copiar');

const claves = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

const ocultarElemento = (elemento) => {
  elemento.style.display = 'none';
};

const mostrarElemento = (elemento) => {
  elemento.style.display = 'inline-block';
};

const validarTexto = () => {
  const textoEscrito = texto.value;
  const contieneCaracterEspecial = /[^a-z\s]/.test(textoEscrito);

  if (contieneCaracterEspecial) {
    alert('Solo letras minúsculas y sin acentos.');
    return true;
  }
  return false;
};

const encriptar = (frase) => {
  Object.entries(claves).forEach(([original, encriptado]) => {
    const regex = new RegExp(original, 'gi');
    frase = frase.replace(regex, encriptado);
  });
  return frase;
};

const manejarEncriptacion = () => {
  if (!validarTexto()) {
    let frase = encriptar(texto.value);
    manejarContenedores(frase);
  }
};

const desencriptar = (frase) => {
  Object.entries(claves).forEach(([original, encriptado]) => {
    const regex = new RegExp(encriptado, 'g');
    frase = frase.replace(regex, original);
  });
  return frase;
};

const manejarDesencriptacion = () => {
  if (!validarTexto()) {
    let frase = desencriptar(texto.value);
    manejarContenedores(frase);
  }
};

const manejarContenedores = (frase) => {
  if (frase === '') {
    ocultarElemento(textoProcesado);
    mostrarElemento(textoProcesadoOff);
  } else {
    ocultarElemento(textoProcesadoOff);
    mostrarElemento(textoProcesado);
    textoProcesadoP.innerHTML = frase;
  }
};

const copiarTexto = () => {
  navigator.clipboard.writeText(textoProcesadoP.innerHTML);
};

ocultarElemento(textoProcesado);

btnEncriptar.addEventListener('click', manejarEncriptacion);
btnDesencriptar.addEventListener('click', manejarDesencriptacion);
btnCopiar.addEventListener('click', copiarTexto);
