const list = document.querySelector('.ul')
const buttonShowAll = document.querySelector('.show-all')
const mapAll = document.querySelector('.map-all')
const reduceAll = document.querySelector('.reduce-all')
const buttonFilterAll = document.querySelector('.filter-all')
const buttonDrinkd = document.querySelector('.drink-all')
const contato = document.querySelector('.contato')

function novis(arrayProduct) {

  let myLi = ''

  arrayProduct.forEach((product) => {
    myLi +=

      `
          <li class = showAll>
              <img src= ${product.src}>
              <p>${product.name}</p>
              <p class="item-price">R$ ${formatacao(product.price)}</p>
          </li> 
    `
  })
  list.innerHTML = myLi
}

function drinks() {
  let myLi = ''
  drinkOption.forEach(product => {
    myLi +=

      `
    <li class = drinkShow>
    <img src= ${product.src}>
    <p>${product.name}</p>
    <p class="item-price">R$ ${formatacao(product.price)}</p>
</li>
  `
    list.innerHTML = myLi
  });

}

function formatacao(value) {
  const nei = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  return nei
}

function alteradoPreco() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9

  }))
  novis(newPrice)
}


function Adicionar() {
  const reduceTotal = menuOptions.reduce((acc, product) => acc + product.price, 0)

  list.innerHTML =
    `
  <li>
      <p>O valor total dos itens foi de R$ ${formatacao(reduceTotal)}</p>
  </li>

  `
}

function filtro() {

  const fil = menuPromotion.filter(product => product.promo == true)
  novis(fil)
}





buttonShowAll.addEventListener('click', () => novis(menuOptions))
mapAll.addEventListener('click', alteradoPreco)
reduceAll.addEventListener('click', Adicionar)
buttonFilterAll.addEventListener('click', filtro)
buttonDrinkd.addEventListener('click', drinks)
