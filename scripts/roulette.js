let cards_block = document.querySelector('.cards-rnd')
let cards = document.querySelectorAll('.cards-rnd div');

function start() {
    let random = Math.floor(Math.random() * 10); //от 1 до 0
    cards_block.style.left = -random * 100 + 'px';
    setTimeout(function() {
        random++;
        cards[random].style.background = '#7B90F7'
        cards[random].style.color = 'white'
    }, 2000)
}