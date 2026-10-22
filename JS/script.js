const menuButton = document.getElementById('menu');
const menuItens = document.getElementById('itens');

menuButton.addEventListener('click', () => {
    const aberto = menuItens.classList.toggle('ativo');
    menuButton.setAttribute('aria-expanded', aberto);
});   


const linksMenu = menuItens.querySelectorAll('a');

linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuItens.classList.remove('ativo');

        menuButton.setAttribute('aria-expanded', 'false');
    });
});


