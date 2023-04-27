var txtaltura = document.getElementsByTagName('input')[0]
var txtpeso = document.getElementsByTagName('input')[1]
var btn = document.getElementsByTagName('button')[0]
var res_imc = document.getElementById('res-imc')
var res_class = document.getElementById('res-class')

btn.addEventListener('click', calcular)

function calcular(){
    var altura = Number(txtaltura.value)
    var peso = Number(txtpeso.value)
    var imc = (peso/(altura*altura)).toFixed(2)

    res_imc.innerHTML = `IMC: ${imc}`

    if(imc < 18.5){
        res_class.innerHTML = 'Classificação: Abaixo do Peso'
    }
    if(imc >= 18.5){
        res_class.innerHTML = 'Classificação: Normal'
    }
    if(imc > 24.9){
        res_class.innerHTML = 'Classificação: Sobre Peso'
    }
    if(imc > 29.9){
        res_class.innerHTML = 'Classificação: Obesidade Grau I'
    }
    if(imc > 34.9){
        res_class.innerHTML = 'Classificação: Obesidade Grau II'
    }
    if(imc > 39.9){
        res_class.innerHTML = 'Classificação: Obesidade Grau III'
    }
}