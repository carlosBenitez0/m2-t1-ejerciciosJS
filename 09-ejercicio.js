/* EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida” */
let celcius = parseInt(prompt("Escriba una cantidad de grados celcius"));
let fahrenheit = celcius * (9 / 5) + 32;

if (fahrenheit >= 14 && fahrenheit <= 32) {
  alert("Temperatura baja");
} else if (fahrenheit > 32 && fahrenheit <= 68) {
  alert("Temperatura adecuada");
} else if (fahrenheit > 68 && fahrenheit <= 96) {
  alert("Temperatura alta");
} else {
  alert("Temperatura desconocida");
}
