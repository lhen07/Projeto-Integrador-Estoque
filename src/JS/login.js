document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", username); // Registra o usuário logado
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página principal após login
    } else {
        document.getElementById("loginMessage").innerText = "Usuário ou senha incorretos!";
    }
});

function mostrarCadastro() {
    document.getElementById("registerForm").style.display = "block";
}

function cadastrarUsuario() {
    let newUsername = document.getElementById("newUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();

    if (!newUsername || !newPassword) {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []; // Recupera usuários existentes
    let usuarioExistente = usuarios.find(user => user.username === newUsername);

    if (usuarioExistente) {
        alert("Esse usuário já existe! Escolha outro nome.");
        return;
    }

    usuarios.push({ username: newUsername, password: newPassword }); // Adiciona novo usuário
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Salva no `localStorage`

    alert("Cadastro realizado com sucesso! Agora faça login.");
    document.getElementById("registerForm").style.display = "none";
}

function fecharCadastro() {
    document.getElementById("registerForm").style.display = "none";
}
