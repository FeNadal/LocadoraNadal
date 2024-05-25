// Função para adicionar uma nova encomenda a partir dos dados do formulário
function adicionarEncomenda() {
    // Salvar os valores do formulário em variáveis usando os IDs
    var nome = document.querySelector("#nome").value;
    var quantidade = document.querySelector("#qtde").value;
    var produto = document.querySelector("#produto").value;
    var valorUnitario = document.querySelector("#valor").value;

    // Validar se todos os campos foram preenchidos
    if (!nome || !quantidade || !produto || !valorUnitario) {
        alert("Preencher todos os campos corretamente"); // Alerta de campos não preenchidos
        return;
    }

    // Calcular o valor total da encomenda
    var valorTotal = calculaTotal(parseFloat(quantidade), parseFloat(valorUnitario));
    valorTotal = formatacao(valorTotal); // Formatar o valor total

    // Selecionar a tabela
    var tabela = document.querySelector(".tabela tbody");
    // Criar uma nova linha para a tabela
    var novaLinha = document.createElement("tr");
    novaLinha.classList.add("cliente"); // Adiciona a classe "cliente" à nova linha

    // Adicionar células com os dados do formulário à nova linha
    var celulaNome = document.createElement("td"); 
    celulaNome.textContent = nome; 
    celulaNome.classList.add("info-nome");
    novaLinha.appendChild(celulaNome);


    var celulaProduto = document.createElement("td");
    celulaProduto.textContent = produto;
    novaLinha.appendChild(celulaProduto);

    var celulaQuantidade = document.createElement("td");
    celulaQuantidade.textContent = quantidade;

    var celulaValorUnitario = document.createElement("td");
    celulaValorUnitario.textContent = formatacao(parseFloat(valorUnitario));

    novaLinha.appendChild(celulaQuantidade);
    novaLinha.appendChild(celulaValorUnitario);

    var celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = valorTotal;
    novaLinha.appendChild(celulaValorTotal);

    // Adicionar a nova linha à tabela
    tabela.appendChild(novaLinha);
}

// Função para adicionar uma nova encomenda vinda do banco de dados
function adicionarEncomendaDoBanco(encomenda) {
    // Selecionar a tabela
    var tabela = document.querySelector(".tabela tbody");
    // Criar uma nova linha para a tabela
    var novaLinha = document.createElement("tr");
    novaLinha.classList.add("cliente"); // Adiciona a classe "cliente" à nova linha

    // Adicionar células com os dados da encomenda à nova linha
    var celulaNome = document.createElement("td"); 
    celulaNome.textContent = encomenda.nome; 
    celulaNome.classList.add("info-nome");
    novaLinha.appendChild(celulaNome);

    var celulaProduto = document.createElement("td");
    celulaProduto.textContent = encomenda.produto;
    novaLinha.appendChild(celulaProduto);

    var celulaQuantidade = document.createElement("td");
    celulaQuantidade.textContent = encomenda.quantidade;

    var celulaValorUnitario = document.createElement("td");
    celulaValorUnitario.textContent = formatacao(parseFloat(encomenda.valorUnitario));

    novaLinha.appendChild(celulaQuantidade);
    novaLinha.appendChild(celulaValorUnitario);

    // Calcular o valor total com base na quantidade e no valor unitário
    var valorTotal = calculaTotal(parseFloat(encomenda.quantidade), parseFloat(encomenda.valorUnitario));
    valorTotal = formatacao(valorTotal); // Formatar o valor total

    // Adicionar célula para o valor total
    var celulaValorTotal = document.createElement("td");
    celulaValorTotal.textContent = valorTotal; // Adicionar o valor total aqui
    novaLinha.appendChild(celulaValorTotal);

    // Adicionar a nova linha à tabela
    tabela.appendChild(novaLinha);
}

// Adiciona evento de clique ao botão "Enviar Formulário"
var botaoAdicionar = document.querySelector("#Enviar-Encomenda");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
    adicionarEncomenda(); // Adiciona a encomenda do formulário
});
