// Adiciona evento de clique ao botão "Buscar Encomendas"
var botaoBuscar = document.querySelector("#buscar-encomendas");
botaoBuscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomenda");
    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            var resposta = xhr.responseText;
            var encomendas = JSON.parse(resposta);

            encomendas.forEach(function (cada_encomenda) {
                adicionarEncomendaDoBanco(cada_encomenda);
            });
        } else {
            console.error("Erro ao buscar encomendas: " + xhr.status);
        }
    });
    xhr.send();
});