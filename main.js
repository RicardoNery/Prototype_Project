// Recebe valores dos campos (valor1,valor2) 
// definidos na tela e faz o calculo
// chama a funcao para calcular
document.querySelector("#calcular").addEventListener("click", function () {
    // Pega os valores da tela    
    let valor1 = document.querySelector('#valorA');//document.querySelector("valor1");
    let valor2 = document.querySelector('#valorB');

    calculo(valor1.value, valor2.value);

});

function calculo(a, b) {
    let calc = parseInt(a) + parseInt(b);
    console.log(calc);
    alert(calc);
}

/* 
function GetValores(p) {
    for (i = 0; i < p; i++) {
        console.log(i);
    }
}
const result = GetValores(10);

 */

