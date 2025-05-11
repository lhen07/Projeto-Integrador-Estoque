// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("produtoForm"); // Obtém a referência do formulário

    if (form) {
        // Adiciona um evento de escuta para o envio do formulário
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o comportamento padrão de envio do formulário

            // Obtém os valores dos campos do formulário
            let referencia = document.getElementById("referencia").value;
            let produto = document.getElementById("produto").value;
            let descricao = document.getElementById("descricao").value;
            let tipo = document.getElementById("tipo").value;
            let quantidade = document.getElementById("quantidade").value;
            let preco = document.getElementById("preco").value;
            let status = document.getElementById("status").value;

            // Cria um objeto contendo os dados do produto
            let produtoData = { referencia, produto, descricao, tipo, quantidade, preco, status };

            // Recupera a lista de produtos do localStorage ou inicializa um array vazio caso não haja produtos
            let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

            // Adiciona o novo produto à lista
            produtos.push(produtoData);

            // Salva a lista atualizada no localStorage
            localStorage.setItem("produtos", JSON.stringify(produtos));

            // Redireciona o usuário para a página inicial após adicionar o produto
            window.location.href = "index.html";
        });
    }
});
