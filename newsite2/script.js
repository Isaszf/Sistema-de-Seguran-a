// 1. EFEITO MÁQUINA DE ESCREVER
const texto = "Aprenda como as invasões acontecem para construir sistemas mais seguros.";
let i = 0;

function escrever() {
    if (i < texto.length) {
        document.getElementById("efeito-hacker").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escrever, 50);
    }
}

// 2. FILTRO DE BUSCA DOS CARDS
function filtrarCards() {
    let input = document.getElementById('campoBusca').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let titulo = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let descricao = cards[i].getElementsByTagName('p')[0].innerText.toLowerCase();
        
        // Pesquisa tanto no título quanto na descrição
        if (titulo.includes(input) || descricao.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 3. NAVEGAÇÃO SUAVE (SMOOTH SCROLL)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicia a função de escrever quando a página abre
window.onload = escrever;