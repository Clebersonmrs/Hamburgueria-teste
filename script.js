const buttonShowAll = document.querySelector('.show-all')
myLi = ''

function showAll() {
    menuOptions.forEach(product => {
        `
        <li class = showAll>
            <img src = product.src>
            <p>X-Bacon Egg</p>
            <p class="item-price">R$ 30,00</p>
        </li>

`


    });
}



buttonShowAll.addEventListener('click', showAll)