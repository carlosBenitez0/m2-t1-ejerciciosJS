/* EJERCICIO 3:
CATEGORIA AUMENTO
A 15%
B 30%
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.
 */

let nombre = "Carlos";
let salario = 700.0;
let salarioConAumento = 0;
let categoria = "C";

switch (categoria) {
  case "A":
    salarioConAumento = salario + salario * 0.15;

    break;
  case "B":
    salarioConAumento = salario + salario * 0.3;

    break;
  case "C":
    salarioConAumento = salario + salario * 0.1;

    break;
  case "D":
    salarioConAumento = salario + salario * 0.2;

    break;
}

console.log(
  `Datos del empleado:\nNombre: ${nombre}\nSalario: ${salario}\nSalario con Aumento: ${salarioConAumento}`
);
