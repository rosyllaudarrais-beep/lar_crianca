// Botões e telas
const botaoProsseguir = document.getElementById('botaoProsseguir');
const botaoRetornar = document.getElementById('botaoRetornar');

const telaAgendamento = document.getElementById('tela-agendamento');
const telaConcluido = document.getElementById('tela-concluido');

// Animação: ao clicar em "Prosseguir"
botaoProsseguir.addEventListener('click', () => {
    telaAgendamento.classList.add('sair-esquerda');
    telaConcluido.classList.add('entrar-direita', 'ativa');

    // Remove classes depois da animação (para resetar)
    setTimeout(() => {
        telaAgendamento.classList.remove('ativa', 'sair-esquerda');
        telaConcluido.classList.remove('entrar-direita');
    }, 500);
});

// Animação: ao clicar em "Retornar ao início"
botaoRetornar.addEventListener('click', () => {
    telaConcluido.classList.add('sair-direita');
    telaAgendamento.classList.add('entrar-esquerda', 'ativa');

    setTimeout(() => {
        telaConcluido.classList.remove('ativa', 'sair-direita');
        telaAgendamento.classList.remove('entrar-esquerda');
        document.querySelector('.formulario').reset(); // limpa o form
    }, 500);
});
