//Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++) {
    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtd").textContent;

    //Captura o valor unitário da encomenda
    var unitario = clientes[count].querySelector(".info-valor").textContent;


    //Verifica se a quantidade é válida
    if (verificaQuantidade(qtde, unitario)) {

        clientes[count].querySelector(".info-qtd").textContent = "QTDE INVÁLIDA!";
        clientes[count].querySelector(".info-qtd").classList.add("qtde-invalida");

    } else if (verificaValor(qtde, unitario)) { //Verifica se o valor é válido

        clientes[count].querySelector(".info-valor").textContent = "VALOR INVÁLIDO!";
        clientes[count].classList.add("valor-invalido");

    }else if (verificaTudo(qtde, unitario)) { //Verifica se o valor e a quantidade é válida

        clientes[count].querySelector(".info-valor").textContent = "VALOR INVÁLIDO!";
        clientes[count].querySelector(".info-qtd").textContent = "QTDE INVÁLIDA!";
        clientes[count].classList.add("valor-invalido");

    }else{ 
        //Quantidade OK, prossegue      
        //Calcula o valor total da encomenda
        clientes[count].querySelector(".info-total").textContent = formatacao(calculaTotal(qtde, unitario));

        clientes[count].querySelector(".info-valor").textContent = formatacao(unitario);
    }

}


//Funções

//Função para o cálculo do valor total
function calculaTotal(qtdeEncomenda, unitarioProduto) {
    var total = 0;

    total = qtdeEncomenda * unitarioProduto;

    return total;
}

//Função para a verificação da quantidade de encomenda
function verificaQuantidade(quanti, uni){

    if ((quanti < 1 || isNaN(quanti)) && uni >= 1) {
        return true;
    }else{
        return false;
    }
}

//Função para a verificação do valor unitário
function verificaValor(quanti, uni){

    if ((uni < 1 || isNaN(uni)) && quanti >= 1) {
        return true;
    }else{
        return false;
    }
}

//Função para a verificação do valor e quantidade da encomenda
function verificaTudo(quanti, uni){
    var quantidade = false;

    if ((quanti < 1 || isNaN(quanti)) && uni < 1 || isNaN(uni)) {
        return true;
    }else{
        return false;
    }
}

//Função para a formatação
function formatacao(valor){
    
    var format = parseFloat(valor);
    return format.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'})

}