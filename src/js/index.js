const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value
        if (idSelecionado === 'ultron') return
        // troca de brilho de personagens pra personagens
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        // aparecer 1P
        const tag = document.querySelector('.tag')
        if (personagemSelecionado.classList.contains('selecionado')) tag.style.display = 'block'
        
        // troca de personagens grande
        const personagemJogador1 = document.querySelector('#personagem-jogador-1')
        personagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        // troca de nomes embaixo do personagem grande
        const nomeJogador1 = document.querySelector('#nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomeJogador1.innerHTML = nomeSelecionado
        
    })
})