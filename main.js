function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;
const classe = lista[Contador].classList[1];
console.log(classe);

while (Contador < lista.length) {
    Teclado [Contador].onclick = function () {
        tocar ('#som_tecla_tom');
    }
    Contador = Contador + 1;
    console.log (Contador);

