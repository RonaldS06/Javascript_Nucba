const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const busqueda = document.getElementById('busqueda')
const numero = document.getElementById('numero')
const containerPizza = document.getElementById('container_pizza')

busqueda.addEventListener('click', (e) => {
  e.preventDefault();

  const pizzaId = parseInt(numero.value);

  containerPizza.innerHTML = ''; // Limpiar resultados anteriores

  if (isNaN(pizzaId)) {
    mensajeError("Por favor, ingresa un valor.");
    return;
  }

  const pizza = pizzas.find(pizza => pizza.id === pizzaId);

  if (pizza) {
    mostrarPizzaCard(pizza);
    localStorage.setItem('ultimaPizza', JSON.stringify(pizza));
  } else {
    mensajeError("No se encontró una pizza con el ID ingresado.");
    localStorage.removeItem('ultimaPizza');
  }
});

function mostrarPizzaCard(pizza) {
  const cardPizza = document.createElement('div');
  cardPizza.classList.add('card_pizza');
  
  cardPizza.innerHTML = `
    <div class="info_pizza">
      <div class="texto_pizza">
        <h3>${pizza.nombre}</h3>
        <p>Contiene: ${pizza.ingredientes.join(', ')}</p>
      </div>
      <div class="precio">
        <h4>$${pizza.precio}</h4>
      </div>
    </div>
    <div class="img_pizza">
      <img src="${pizza.imagen}" alt="${pizza.nombre}" width="160" height="160">
    </div>
  `;
  containerPizza.appendChild(cardPizza);

  // Almacenamos la pizza en el localStorage
  localStorage.setItem('ultimaPizza', JSON.stringify(pizza));
}

function mensajeError(mensaje) {
  const errorCard = document.createElement('div');
  errorCard.innerHTML = `
    <p style="color: red;">${mensaje}</p>
  `;
  containerPizza.appendChild(errorCard);
  // Si se da el error, que la pizza sea borrada
  localStorage.removeItem('ultimaPizza');
}