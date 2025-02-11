'use strict'


function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novaImg.src = `./icon/${disciplina.icon}`

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)

const jogos = [
    {nome: 'Forza Horizon 5', descricao: 'Forza Horizon 5 é um jogo de corrida em mundo aberto ambientado no México, com gráficos impressionantes, clima dinâmico e uma vasta seleção de carros. Oferece uma experiência imersiva, com desafios variados e modos solo e multiplayer.', imagem: 'forza5.webp', cor: 'rgb(255, 0, 0)'},
    {nome: 'Need for Speed Payback', descricao: 'Need for Speed Payback é um jogo de corrida de mundo aberto com uma história de vingança, personalização de carros e perseguições policiais intensas.', imagem: 'nfspay.jpg', cor: 'rgb(255, 0, 0)'},
    {nome: 'Gran Turismo 4', descricao: ' Gran Turismo 4 (2004) é um simulador de corrida para PS2, com mais de 700 carros e 50 pistas. Destaca-se pelo modo carreira, personalização de veículos e o inovador modo B-Spec, onde o jogador gerencia corridas. Com gráficos avançados e física realista, é um dos maiores sucessos da franquia.', imagem: 'gt4.jpg', cor: 'rgb(255, 0, 0)'}
];

function criarCard(jogos) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = jogos.cor;

    
    const imagem = document.createElement('img');
    imagem.src = `icon/${jogos.imagem}`;
    imagem.alt = jogos.nome;

    
    const h2 = document.createElement('h2');
    h2.textContent = jogos.nome;

    
    const p = document.createElement('p');
    p.textContent = jogos.descricao;

    
    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);

    container.appendChild(card);
}
personagens.forEach(criarCard);