const apiKey = '252d0215';
const frmPesquisa = document.querySelector(".forma");


frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa= ev.target.pesquisa.value;

    if(pesquisa == ""){
        alert("Preencha o campo!")
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => carregaLista(json))
}

const carregaLista =(json) => {
    const lista = document.querySelector("div.lista2");
    lista.innerHTML="";

    if (json.Response == 'False'){
        alert("Nenhum filtro encontrado!")
        return
    }

    json.Search.forEach(element => {
        console.log(element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img class="imagem2" src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item);
    });
}