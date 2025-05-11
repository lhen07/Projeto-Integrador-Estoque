// Função para vender um produto usando o código de referência do produto
function venderProdutoPorReferencia(referenciaProduto, quantidadeVendida) {
    let tabela = document.getElementById("estoque"); // Obtém a referência da tabela

    // Percorre todas as linhas da tabela, exceto a de cabeçalho
    for (let i = 1; i < tabela.rows.length; i++) {
        let linha = tabela.rows[i];
        let referenciaAtual = linha.cells[0].innerText.trim(); // Obtém a referência do produto
        let quantidadeAtual = parseInt(linha.cells[4].innerText); // Obtém a quantidade disponível

        // Se a referência corresponde ao produto desejado
        if (referenciaAtual === referenciaProduto) {
            let novaQuantidade = Math.max(quantidadeAtual - quantidadeVendida, 0); // Atualiza a quantidade garantindo que não fique negativa
            linha.cells[4].innerText = novaQuantidade; // Atualiza a célula na tabela

            // Se o estoque acabar, altera o status para "Esgotado"
            if (novaQuantidade === 0) {
                linha.cells[6].innerText = "Esgotado";
            }
            return;
        }
    }
    alert("Produto não encontrado!"); // Exibe um alerta se o produto não existir
}

// Função para registrar a venda de um produto
function venderProduto() {
    let referenciaProduto = document.getElementById("produtoVenda").value.trim(); // Obtém a referência informada pelo usuário
    let quantidadeVendida = parseInt(document.getElementById("quantidadeVenda").value); // Obtém a quantidade a ser vendida
    let tabela = document.getElementById("estoque");

    let encontrado = false; // Variável para verificar se o produto foi encontrado

    // Percorre todas as linhas da tabela
    for (let i = 1; i < tabela.rows.length; i++) {
        let linha = tabela.rows[i];
        let referenciaAtual = linha.cells[0].innerText.trim();
        let quantidadeAtual = parseInt(linha.cells[4].innerText);

        // Se encontrar o produto, atualiza a quantidade
        if (referenciaAtual === referenciaProduto) {
            let novaQuantidade = Math.max(quantidadeAtual - quantidadeVendida, 0);
            linha.cells[4].innerText = novaQuantidade;

            // Atualiza o status se o estoque acabar
            if (novaQuantidade === 0) {
                linha.cells[6].innerText = "Esgotado";
            }

            encontrado = true;
            break;
        }
    }

    // Se o produto não for encontrado, alerta o usuário
    if (!encontrado) {
        alert("Produto não encontrado!");
    }
}

// Função para remover um produto do estoque
function removerProduto() {
    let referenciaProduto = prompt("Digite a referência do produto a ser removido:"); // Solicita ao usuário a referência do produto
    if (!referenciaProduto) return; // Cancela a ação se nenhum valor for digitado

    
    let tabela = document.getElementById("estoque");

    // Percorre todas as linhas da tabela
    for (let i = 1; i < tabela.rows.length; i++) {
        let linha = tabela.rows[i];
        let referenciaAtual = linha.cells[0].innerText.trim();

        // Se encontrar o produto, remove a linha da tabela
        if (referenciaAtual === referenciaProduto) {
            tabela.deleteRow(i);
            alert("Produto removido com sucesso!");
            return;
        }
    }
    alert("Produto não encontrado!"); // Exibe um alerta se a referência informada não existir
}
