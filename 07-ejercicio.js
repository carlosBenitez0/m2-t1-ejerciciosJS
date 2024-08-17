/* EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
*/

// Un numero puede cumplir con varias de las categorias mostradas
let numeros = [];
let numero;
for (let i = 0; i < 10; i++) {
  numero = parseInt(prompt(`Ingrese un numero(${i + 1}/10):`));
  numeros.push(numero);
}

let positivos = 0;
let negativos = 0;
let multiplosDeQuince = 0;
let pares = 0;
let numerosIngresados = "";

numeros.forEach((n) => {
  numerosIngresados += n + ", ";
  if (n > 0) {
    positivos++;
  } else if (n < 0) {
    negativos++;
  }

  if (n % 15 == 0) {
    multiplosDeQuince++;
  }

  if (n % 2 == 0) {
    pares++;
  }
});

numerosIngresados = numerosIngresados.slice(0, -2) + ".";
alert(
  `Numeros Ingresados: ${numerosIngresados}\nCantidad de positivos: ${positivos}\nCantidad de negativos: ${negativos}\nCantidad de Multiplos de 15: ${multiplosDeQuince}\nCantidad de pares: ${pares}\n`
);
