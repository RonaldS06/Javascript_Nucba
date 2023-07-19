const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 580,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// a)  Las pizzas que tengan un id impar.
console.log("EJERCICIO1:")
pizzas.forEach(pizza => {
  if (pizza.id % 2 !== 0) {
    console.log(`La pizza: ${pizza.nombre}, tiene id impar: ${pizza.id}`)
  }
})

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log("EJERCICIO2:")

const precioMenorA = pizzas.filter(pizza => {
  return pizza.precio < 600;
})
/* console.log(precioMenorA) */
precioMenorA.forEach(pizzita => console.log(`La ${pizzita.nombre} tiene un costo de $${pizzita.precio}`))

// c) El nombre de cada pizza con su respectivo precio.
console.log("EJERCICIO3:")
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio}`)
})

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log("EJERCICIO4:")

const verIngredientes = () => {

  pizzas.forEach(pizza => {
    console.log(`La ${pizza.nombre} tiene como ingrediente: ${pizza.ingredientes.join(", ")}`)
  })

}
verIngredientes();
