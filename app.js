let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function cambiarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales(){
    cambiarTexto("h1", "Juego del número secreto!");
    cambiarTexto("p", "Indica un número del 1 al 100");
    numeroSecreto = randomize();
    intentos = 1
}

function randomize(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length == numeroMaximo){
        cambiarTexto("p", "Ya se sortearon todos los números posibles");
    }
    else{ 
        if(numerosSorteados.includes(numeroGenerado)){
        return randomize();
    }
        else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}


}

function verificarIntento(){
    let numero = parseInt(document.getElementById("valorUsuario").value);
    if(numero === numeroSecreto){
        cambiarTexto("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }else if(numero > numeroSecreto){
        cambiarTexto("p", "El numero secreto es menor");
    }else{
        cambiarTexto("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarInput();
}

function newGame(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

function limpiarInput(){
    document.getElementById("valorUsuario").value = "";
}

condicionesIniciales();