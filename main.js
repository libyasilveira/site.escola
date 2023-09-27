function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Teclado.length) {
    const tecla = Teclado[Contador];
    const classe = tecla.classList[1];
  //  console.log(classe);
    const idAudio =`#som_${classe}`;
  //   console.log(idAudio);
    tecla.onclick = function () {
        TocaSomPom(idAudio);
    }

    Contador = Contador + 1;
   // console.log (Contador);
   tecla.onkeydown = function (evento){
    tecla.classList.add('ativa');
     console.log(evento.code === 'Space' || evento.code ==='Enter');
   }
   tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
   } 

}