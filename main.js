function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;
const classe = Teclado[Contador].classList[1];
console.log(classe);

while (Contador < Teclado.length) {
    Teclado [Contador].onclick = function () {
        tocar ('#som_tecla_tom');
    }
    Contador = Contador + 1;
    console.log (Contador);
}
