function TocaSomPom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');
let Contador = 0;

while (Contador < Teclado.length) {
  const tecla = Teclado[Contador];
  const classe = tecla.classList[1];
  const idAudio = `#som_${classe}`;

  tecla.onclick = function () {
      TocaSomPom(idAudio);
  }

  Contador = Contador + 1;

  if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.onkeydown = function (evento) {
      this.classList.add('ativa');
      console.log(evento.code === 'Space' || evento.code === 'Enter');
  }

  tecla.onkeyup = function (evento) {
      this.classList.remove('ativa');
  }