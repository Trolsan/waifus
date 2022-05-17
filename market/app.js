const main = document.getElementById('main-market');
const conte= document.getElementById('table-shop')
const selectProducts = document.getElementById("select-products");
const boton1= document.getElementsByClassName("button-buy")
const productoW = document.getElementById("ProductoW")
const precioW = document.getElementById("PrecioW")
const cantidadW = document.getElementById("CantidadW")
const totalW = document.getElementById("TotalW")


window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);


function elementSelected(event) {
  // 1. Recorrer el array
  products.map(element => {
    if (event.target.value === element.name) {
      nameProduct = element.name
      imgProduct = element.img
      priceProduct = element.price
      idProduct = element.id

    }
  })

  createCard(nameProduct, imgProduct, priceProduct)

}




// -----------------------------------------------------------------

// SECCION DE CARGA DE PAG
function loadSelect() {
  products.map(element=>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectProducts.appendChild(opt);
    document.getElementById('tabla').style.display = "none"



  });
}

// ----------------------------------------------------------------

// SECCION DE CREACION DE CARTAS Y MODIFICACION DE DATOS
function createCard(nameProduct, imgProduct, priceProduct) {



  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');

  const price = document.createElement("p");

  const boton = document.createElement("btn")
  const boton1 = document.createElement("button")
  const pBtn = document.createElement("p")
  // const boton2 = document.createElement("button")


  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  imgCard.setAttribute('draggable', false);

  // boton2.setAttribute('id','tarjetas');
  title.textContent = nameProduct;
  price.textContent =  '$'+ priceProduct;
  pBtn.textContent = "ADD CART WAIFU"





  boton1.appendChild(pBtn)
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  main.appendChild(card);
  card.appendChild(boton)
  card.appendChild(boton1)


  card.classList.add("card");
  boton.classList.add("btn-cart")
  boton1.classList.add("button-buy")

  boton1.addEventListener('click',carrito)


  boton1.addEventListener('click',deshabilitar)



// ----------------------------------------------------------------------------------
function deshabilitar() {
  boton1.disabled=true
  pBtn.textContent = "SE AÑADIO AL CARRO"
  pBtn.style.color = "black"
}



// SECCION DEL CARRO DE COMPRAS


// SECCION DE SUMA DE PRECIOS Y CONTADOR DE CANTIDAD DE PRODUCTOS

let contadorI = 0

function carrito() {


  // let final = priceProduct;

  // for (let i = 0; i < total.length; i++) {
    //     final += total[i];
    // }
    contadorI = contadorI + 1
    // total.push(priceProduct)

    document.getElementById('tabla').style.display = "block"



    // SECCION DE CREACION DE TABLA POR CLICK

  const table = document.createElement('tr');
  const productoW = document.createElement('td');
  const precioW = document.createElement('td');
  const cantidadW = document.createElement("td");
  const cantidadP = document.createElement("p")
  const agg = document.createElement("button")
  const rm = document.createElement("button")

  const totalW = document.createElement("td")
  const totalP = document.createElement("p")

  // SECCION DE MODIFICACION DE DATOS DE LA TABLA
  agg.classList.add('button-agg');
  agg.textContent = "+"
  rm.classList.add('button-rm');
  rm.textContent = "-"

  productoW.textContent = nameProduct;
  precioW.textContent = '$'+ priceProduct

  cantidadP.textContent = contadorI
  totalP.textContent = `$${priceProduct}`


  totalW.appendChild(totalP)
  cantidadW.appendChild(cantidadP)
  cantidadW.appendChild(rm)
  cantidadW.appendChild(agg)
  table.appendChild(productoW);
  table.appendChild(precioW);
  conte.appendChild(table);
  table.appendChild(cantidadW);
  table.appendChild(totalW);
  agg.addEventListener('click',sumas)
  rm.addEventListener('click',restas)







const total = [priceProduct]
let contadorF = 1



function sumas() {

  let final = priceProduct;

  for (let i = 0; i < total.length; i++) {
      final += total[i];
  }
  contadorF = contadorF + 1
  cantidadP.textContent= contadorF

  totalP.textContent =  `$${final}`
  total.push(priceProduct)
  console.log(final);

}

function restas() {
  contadorF = contadorF - 1

  cantidadP.textContent= contadorF
  let resta = [];
  for (let i = 1; i < total.length; i++) {
      resta = total.slice(0,-1);
     console.log(resta);
     restame()
  }


function restame(){
  let suma = 0
  for (let i = 0; i < resta.length; i++) {
    suma += resta[i];
    
    console.log(suma);
    totalP.textContent =  `${suma}`
}
}









  
  console.log( typeof resta);


}

}
}


