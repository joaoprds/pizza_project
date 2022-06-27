const c = (el) =>document.querySelector(el);
const cs = (el) =>document.querySelectorAll(el);

pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true);


     //Pegando as imagens das pizzas dinamicamente e rendezirando em tela//
     pizzaItem.querySelector('.pizza-item--img img').src = item.img

    //Pegando os nomes das pizzas dinamicamente e rendezirando em tela//
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name

    //Pegando a descrição das pizzas dinamicamente e rendezirando em tela//
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    //Pegando o preço das pizzas dinamicamente e rendezirando em tela//
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`





    c('.pizza-area').append(pizzaItem);

});