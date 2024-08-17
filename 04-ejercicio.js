/* EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo. */

numero1 = parseInt(prompt("Ingrese el primer numero: "));
numero2 = parseInt(prompt("Ingrese el segundo numero: "));
function numeroMayor(n1, n2) {
  let mayor = n1 > n2 ? n1 : n2;
  return mayor;
}

resultado = numeroMayor(numero1, numero2);
console.log(resultado);
