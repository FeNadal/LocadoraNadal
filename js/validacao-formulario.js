var botaoAdicionar = document.querySelector("#Enviar-Encomenda");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("O botão foi clicado!");
    adicionarEncomenda();
});


function adicionarEncomenda() {
    // Pegar os valores do formulário
    var nome = document.querySelector("#nome").value;
    var quantidade = document.querySelector("#qtde").value;
    var produto = document.querySelector("#produto").value;
    var valorUnitario = document.querySelector("#valor").value;

    // Validar se todos os campos foram preenchidos
    if (!nome || !quantidade || !produto || !valorUnitario) {
        alert("Preencher todos os campos corretamente");
        return;
    } else {
        if(verificaTudo(quantidade, valorUnitario)){
            quantidade = "QTDE INVÁLIDA!";
            valorUnitario = "VALOR INVÁLIDO!";
        } else if (verificaQuantidade(quantidade, valorUnitario)) { // Verifica se a quantidade é inválida
            quantidade = "QTDE INVÁLIDA!";
        } else if (verificaValor(quantidade, valorUnitario)) {
            valorUnitario = "VALOR INVÁLIDO!"
        } 

        // Calcula o valor total da encomenda
        var valorTotal = calculaTotal(parseFloat(quantidade), parseFloat(valorUnitario));
        valorTotal = formatacao(valorTotal);

        // Selecionando a tabela e criando linha
        var tabela = document.querySelector(".tabela tbody");
        var novaLinha = document.createElement("tr");

        // Adicionar células com os dados do formulário à nova linha
        var celulaNome = document.createElement("td");
        celulaNome.textContent = nome;
        novaLinha.appendChild(celulaNome);

        var celulaProduto = document.createElement("td");
        celulaProduto.textContent = produto;
        novaLinha.appendChild(celulaProduto);

        var celulaQuantidade = document.createElement("td");
        celulaQuantidade.textContent = quantidade;
        var celulaValorUnitario = document.createElement("td");
        celulaValorUnitario.textContent = valorUnitario;
        
        if(quantidade == "QTDE INVÁLIDA!" && valorUnitario == "VALOR INVÁLIDO!"){
            novaLinha.classList.add("valor-invalido");
        } else if (quantidade == "QTDE INVÁLIDA!") { // Verifica se a quantidade é inválida
            celulaQuantidade.classList.add("qtde-invalida"); // Adiciona a classe à célula de quantidade
        } else if (valorUnitario == "VALOR INVÁLIDO!") {
            novaLinha.classList.add("valor-invalido");
        } 
        
        novaLinha.appendChild(celulaQuantidade);
        novaLinha.appendChild(celulaValorUnitario);


        // Adicionar a nova linha à tabela
        tabela.appendChild(novaLinha);

    }
}
