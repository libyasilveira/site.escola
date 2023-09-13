function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const Teclado = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
    Teclado [Contador].onclick = TocaSomPom;
    Contador = Contador + 1;
    console.log (Contador);
}
