/* OBJETIVO
• Dominar las estructuras condicionales, repetitivas y otros mecanismos para el
control de flujo en el código. */

/* INDICACIONES: Resolver los siguientes ejercicios utilizando estructuras de control con
JavaScript. */

/* EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario. */
edad = parseInt(prompt("Escriba su edad"));
function determinarEdad(edad) {
  resultado = edad >= 18 ? "Es mayor de edad " : "Es menor de edad";
  console.log(resultado);
}

determinarEdad(edad);
// ------------------------------------------------------------------------------------------------------
