function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Teclado.length) {
    const classe = Teclado[Contador].classList[1];
  //  console.log(classe);
    const idAudio =`#som_${classe}`;
  //   console.log(idAudio);
    Teclado.onclick = function () {
        TocaSomPom(idAudio);
    }

    Contador = Contador + 1;
   // console.log (Contador);
   Teclado.onkeydown = function (evento){
    Teclado.classList.add('ativa');
     console.log(evento.code);
   }
   Teclado.onkeyup = function () {
    Teclado.classList.remove('ativa');
   } 

}