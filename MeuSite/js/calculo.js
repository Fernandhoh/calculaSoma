






//cria objeto no js que sera especializado no elemento HTML
var botaoCalcular = document.getElementById('botaodoHTML')


function calcularSoma(a,b) {
    let num1 = Number (a)
    let num2 = Number (b)
    var resultado = num1 + num2
    return resultado

    //console.log( resultado)
}


//cria ação de escutar os eventos no html
botaoCalcular.addEventListener('click', function (){
    let numero1 = document.getElementById('largura')
    let numero2 = document.getElementById('Comprimento')

    // cria objeto referente span do HTML que ira receber o valor da soma
    let spanResultado = document.getElementById('resultado')

    //chama função soma e guarda na variavel resultadoSoma
    let resultadoSoma = calcularSoma(largura.value, comprimento.value)

    spanResultado.innerText = resultadoSoma

})

