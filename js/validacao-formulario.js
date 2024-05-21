//Selecionando o botão pelo seu id
var botaoAdicionar = document.querySelector("#Enviar-Encomenda");

//Quando o botão é clicado, esta função é chamada
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("O botão foi clicado!"); //Escrevendo no console
    adicionarEncomenda(); //Chamando a função para executar as ações
});


//Função que armazena os dados e cria uma nova linha
function adicionarEncomenda() {

    //Salvar os valores do formulário em uma variável através dos id's
    var nome = document.querySelector("#nome").value;
    var quantidade = document.querySelector("#qtde").value;
    var produto = document.querySelector("#produto").value;
    var valorUnitario = document.querySelector("#valor").value;

    //Validar se todos os campos foram preenchidos
    if (!nome || !quantidade || !produto || !valorUnitario) {
        alert("Preencher todos os campos corretamente"); //Cria um aviso
        return;
    } else {
        //Salvar o valor total do valor unitário * quantidade feita na função calculaTotal
        var valorTotal = calculaTotal(parseFloat(quantidade), parseFloat(valorUnitario));
        valorTotal = formatacao(valorTotal); // Formatando o valor total

        //Selecionar a tabela
        var tabela = document.querySelector(".tabela tbody");
        //Criar a linha nova
        var novaLinha = document.createElement("tr"); 

        //Adicionar o nome com os dados do formulário à nova linha
        var celulaNome = document.createElement("td"); //Criar uma nova célula de dados para o nome
        celulaNome.textContent = nome; //Definir o conteúdo como o valor da variável nome
        novaLinha.appendChild(celulaNome); //Adicionar a célula do nome à nova linha da tabela

        //Adicionar o produto com os dados do formulário à nova linha
        var celulaProduto = document.createElement("td");
        celulaProduto.textContent = produto;
        novaLinha.appendChild(celulaProduto);

        //Adicionar a quantidade com os dados do formulário à nova linha
        var celulaQuantidade = document.createElement("td");
        celulaQuantidade.textContent = quantidade;
        //Adicionar o valor unitário com os dados do formulário à nova linha
        var celulaValorUnitario = document.createElement("td");
        celulaValorUnitario.textContent = valorUnitario;

        //Formatar o valor unitário com a função formatação
        celulaValorUnitario.textContent = formatacao(parseFloat(valorUnitario));

        //Verificar se há dados nulos ou zerados
        if (verificaTudo(quantidade, valorUnitario)) { //Verificar se a quantidade e o valor unitário é invalido
            alert("Inserir Quantidade e Valor Unitário Válidos!"); //Cria um aviso
            return;
        } else if (verificaQuantidade(quantidade, valorUnitario)) { //Verificar se a quantidade é inválida
            alert("Inserir Quantidade Válida!"); //Cria um aviso
            return;
        } else if (verificaValor(quantidade, valorUnitario)) { //Verificar se o valor unitárioe é inválido
            alert("Inserir Valor Unitário Válido!"); //Cria um aviso
            return;
        }

        novaLinha.appendChild(celulaQuantidade);
        novaLinha.appendChild(celulaValorUnitario);

        //Adicionar célula para o valor total
        var celulaValorTotal = document.createElement("td");
        celulaValorTotal.textContent = valorTotal;
        novaLinha.appendChild(celulaValorTotal);

        //Adicionar a nova linha à tabela
        tabela.appendChild(novaLinha);

    }
}
