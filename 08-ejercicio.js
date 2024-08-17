/*EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario. */

tabla = parseInt(prompt("¿Cuál tabla de multiplicar desea generar?"));
tableMultiplicar = "";
for (let i = 1; i <= 10; i++) {
  tableMultiplicar += `${tabla} x ${i} = ${tabla * i}\n`;
}
alert(tableMultiplicar);
