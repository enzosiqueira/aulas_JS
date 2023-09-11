function dadosacesso(){
    numero = prompt("Digite o número do cartão")
    senha = prompt("Digite a senha")
}

saldo = 1000
function saque(valor){
    saldo = saldo - valor
    
    return document.write("Seu saldo é de: R$" + saldo + ",00")
}