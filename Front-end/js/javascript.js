// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'flex'; // Muda de 'none' para 'flex'
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'none';
}

// Fechar se clicar fora da caixinha branca (no fundo escuro)
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* --- Lógica do Google Login --- */

function handleCredentialResponse(response) {
    // Decodifica o token para ler os dados
    const data = jwtDecode(response.credential);

    // Mostra no console para você ver que funcionou
    console.log("Logado como:", data.email);
    console.log("Nome:", data.name);
    
    // Fecha o modal e dá um feedback
    fecharModal();
    // Exemplo: Trocar a foto do header pela foto do Google
    // document.querySelector('.profile-icon').innerHTML = `<img src="${data.picture}" style="border-radius: 50%; width: 100%;">`;
}

window.onload = function () {
    // 1. Inicializa com seu ID (Verifique se o ID está correto no Console do Google Cloud)
    google.accounts.id.initialize({
        client_id: "82393453867-lu8k3cku3gpsoak40uveod0io0ilm2bb.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    // 2. RENDERIZA O BOTÃO (Aqui é onde arrumamos o visual)
    google.accounts.id.renderButton(
        document.getElementById("botao-google"), // Onde ele vai aparecer
        { 
            theme: "outline", 
            size: "large",    // Tamanho grande
            type: "icon",     // <--- ISSO É O IMPORTANTE: "icon" mostra só o simbolo, "standard" mostra texto
            shape: "circle",  // <--- Deixa redondinho
            // text: "signin"   // As vezes o Google precisa disso como fallback
        } 
    );
}

// Função para ler os dados do usuário (JWT Decoder)
function jwtDecode(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Funções do Modal (Mantenha as suas se já existirem)
function abrirModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Fechar ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}