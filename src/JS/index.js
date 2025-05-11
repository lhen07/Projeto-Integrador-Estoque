// Executa quando a página carrega
window.onload = function() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Obtém usuários armazenados no localStorage
    let usuarioLogado = localStorage.getItem("usuarioLogado"); // Obtém o usuário logado

    // Se não houver usuário logado, redireciona para a página de login
    if (!usuarioLogado || !usuarios.find(user => user.username === usuarioLogado)) {
        window.location.href = "login.html"; // Redireciona para a tela de login se não houver usuário logado
    }
};

// Exibe o menu dropdown ao passar o mouse sobre o perfil
document.querySelector(".perfil-container").addEventListener("mouseover", function() {
    document.querySelector(".dropdown-menu").style.display = "block";
});

// Esconde o menu dropdown ao retirar o mouse do perfil
document.querySelector(".perfil-container").addEventListener("mouseleave", function() {
    document.querySelector(".dropdown-menu").style.display = "none";
});

// Função para realizar logout
function logout() {
    localStorage.removeItem("usuarioLogado"); // Remove usuário logado do localStorage
    alert("Você saiu do sistema!"); // Alerta ao usuário
    window.location.href = "login.html"; // Redireciona para a página de login
}

// Exibe o nome do usuário logado na interface
document.getElementById("usuarioLogadoNome").innerText = localStorage.getItem("usuarioLogado") || "Usuário";


document.addEventListener("DOMContentLoaded", function () {
    carregarProdutos();
});

// Função para carregar os produtos armazenados no localStorage
function carregarProdutos() {
    let tabela = document.getElementById("estoque"); // Obtém a referência da tabela
    let produtos = JSON.parse(localStorage.getItem("produtos")) || []; // Obtém os produtos armazenados

    // Adiciona cada produto à tabela
    produtos.forEach(produtoData => {
        adicionarProdutoNaTabela(produtoData);
    });
}

// Adiciona um produto à tabela de estoque
function adicionarProdutoNaTabela(produtoData) {
    let tabela = document.getElementById("estoque");
    let novaLinha = tabela.insertRow(); // Cria uma nova linha na tabela
    novaLinha.setAttribute("data-referencia", produtoData.referencia); // Define a referência do produto como atributo

    // Insere os dados do produto nas células da nova linha
    novaLinha.insertCell(0).innerText = produtoData.referencia;
    novaLinha.insertCell(1).innerText = produtoData.produto;
    novaLinha.insertCell(2).innerText = produtoData.descricao;
    novaLinha.insertCell(3).innerText = produtoData.tipo;
    novaLinha.insertCell(4).innerText = produtoData.quantidade;
    novaLinha.insertCell(5).innerText = `R$ ${produtoData.preco}`;
    novaLinha.insertCell(6).innerText = produtoData.status;

    // Cria um botão para remover o produto
    let celulaAcoes = novaLinha.insertCell(7);
    let botaoRemover = document.createElement("button");
    botaoRemover.innerText = "Remover";
    botaoRemover.onclick = function () {
        removerProduto(produtoData.referencia);
    };
    celulaAcoes.appendChild(botaoRemover);
}

// Função para remover um produto do localStorage e atualizar a tabela
function removerProduto(referencia) {
    let produtos = JSON.parse(localStorage.getItem("produtos")) || []; // Obtém os produtos armazenados
    produtos = produtos.filter(produto => produto.referencia !== referencia); // Remove o produto com a referência especificada
    localStorage.setItem("produtos", JSON.stringify(produtos)); // Atualiza o localStorage

    // Recarrega a tabela após remover o produto
    document.getElementById("estoque").innerHTML = "";
    carregarProdutos();
}