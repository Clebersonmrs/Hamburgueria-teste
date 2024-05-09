const list = document.querySelector('.ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonModifi = document.querySelector('.map-all')
const buttonReduce = document.querySelector('.reduce-all')
const filterAll = document.querySelector('.filter-all')

function showAll(products) {

    myLi = ''

    products.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
    
    
        `
    })

    list.innerHTML = myLi

}
function newValues() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))

    showAll((newPrices))
}

function somarValues() {
    const sumValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos itens foi de R$ ${formatCurrency(sumValue)}</p>
        </li>
    
        `
}

function formatCurrency(value) {
    const newVlr = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    return newVlr
}

function filtrando() {
    const vegans = menuOptions.filter(value => value.vegan === true)

    showAll(vegans)

}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonModifi.addEventListener('click', newValues)
buttonReduce.addEventListener('click', somarValues)
filterAll.addEventListener('click', filtrando)



