function calcular_imc(){
    var altura = document.imcForm.altura.value
    var peso = document.imcForm.peso.value

    var calculo = (peso/(altura*altura))

    if(calculo<18.5){
        alert("Você está magro com esse índice: " + calculo)
    } 
    else if(calculo>=18.5 && calculo<24.9){
        alert("Você está normal com esse índice: " + calculo)
    }
    else if(calculo>=25 && calculo<29.9){
        alert("Você está com sobre peso com esse índice: " + calculo)
    }
    else if(calculo>= 30 && calculo<39.9){
        alert("Você está com obesidade com esse índice: " + calculo)
    }
    else if(calculo>=40){
        alert("Você está com obesidade grave com esse índice: " + calculo)
    }
}