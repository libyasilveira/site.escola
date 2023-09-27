function TocaSomPom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Teclado.length) {
    Teclado[Contador].onclick = function () {
        TocaSomPom(idAudio);
    }

    const classe = Teclado[Contador].classList[1];
    console.log(classe);
    const idAudio = `#som_${classe}`;
    console.log(idAudio);
    //'#som_{classe}'

    Contador = Contador + 1;
    console.log(Contador);
}
