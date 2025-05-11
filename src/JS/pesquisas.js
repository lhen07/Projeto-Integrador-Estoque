// Função para filtrar produtos na tabela com base no termo digitado
function filtrarProdutos() {
    let termo = document.getElementById("filtro").value.toLowerCase(); // Obtém o valor do campo de busca e transforma em minúsculas
    let tabela = document.getElementById("estoque"); // Obtém a referência da tabela

    // Percorre todas as linhas da tabela, começando da primeira linha de dados
    for (let i = 1; i < tabela.rows.length; i++) {
        let linha = tabela.rows[i];
        let nomeProduto = linha.cells[1].innerText.toLowerCase(); // Obtém o nome do produto na linha atual

        // Se o nome do produto contém o termo digitado, a linha permanece visível, caso contrário, é ocultada
        linha.style.display = nomeProduto.includes(termo) ? "" : "none";
    }
}