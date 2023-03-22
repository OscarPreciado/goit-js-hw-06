const input = document.querySelector('input');

input.addEventListener('blur', validarSimbolo)

function validarSimbolo() {
    let cantidadSimbolos = this.value.length;
    let requisito = this.dataset.length;
    console.log(cantidadSimbolos)
    if (cantidadSimbolos == requisito) {
        input.setAttribute('class', 'valid')
    } else {
        input.setAttribute('class', 'invalid')
    }

}

