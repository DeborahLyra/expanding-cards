/*
precisa fazer a classe active alterar entre as divs

primeiro usa for each para acessar cada classe (se não usar, vai pegar todos de uma vez) e depois o addEventListener para 
capturar o que acontece no click. Precisa remover a classe active de todos e acrescentar 
na que foi clicada
*/

const panals = document.querySelectorAll('.panel');

panals.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClasses()
        panel.classList.add('active')
    })
});

function removeClasses() {
    panals.forEach(panel => {
        panel.classList.remove('active')
    })

}
