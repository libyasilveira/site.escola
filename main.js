function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < Teclado.length) {
    Teclado [Contador].onclick = function () {
        tocar ('#som_tecla_tom');
    }
    const classe = Teclado[Contador].classList[1];
console.log(classe);

    Contador = Contador + 1;
    console.log (Contador);
}
