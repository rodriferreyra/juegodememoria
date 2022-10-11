//Variables

let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResulado = null;
let segundoResulado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivoId = null;


//DocumentoHTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiemporestante');

//Numeros Aleatorios

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Math.random()-0.5});
console.log(numeros);

//Fución Contar Tiempo

function contarTiempo(){
    tiempoRegresivoId = setInterval(()=>{
timer--;
mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
if(timer == 0){
    clearInterval(tiempoRegresivoId);
    bloquearTarjetas();
}
    },1000);
}

function bloquearTarjetas(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}


//Función Principal

function destapar(id){

if(temporizador == false){
    contarTiempo();
    temporizador = true;
}
tarjetasDestapadas++;
console.log(tarjetasDestapadas);
if (tarjetasDestapadas == 1){

//Muetra de Primer Numero

tarjeta1 = document.getElementById(id);
primerResulado = numeros[id]
tarjeta1.innerHTML = numeros[id];

//Deshabilita Primer Botón

tarjeta1.disabled = true;
}else if (tarjetasDestapadas ==2){
    
//Muestra Segundo Botón

tarjeta2 = document.getElementById(id);
segundoResulado = numeros[id];
tarjeta2.innerHTML = numeros[id]

//Deshabilita Segundo Botón

tarjeta2.disabled = true;

//Incrementar Movimientos

movimientos++;
mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

if(primerResulado == segundoResulado){

//Encerar Contador de Tarjetas Destapadas

tarjetasDestapadas = 0;

//Aumentar Aciertos
aciertos++;
mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
if(aciertos == 8){
    clearInterval(tiempoRegresivoId);
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😎`;
    mostrarTiempo.innerHTML = `MUY BIEN! 👌 DEMORASTE ${timerInicial - timer} segundos`;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😮`;
}
}else{

//Mostrar temporalmente Valores y volver a Tapar

setTimeout(()=>{
    tarjeta1.innerHTML = ' ';
    tarjeta2.innerHTML = ' ';
    tarjeta1.disabled = false;
    tarjeta2.disabled = false;
    tarjetasDestapadas = 0;

},800);



}
}
}

