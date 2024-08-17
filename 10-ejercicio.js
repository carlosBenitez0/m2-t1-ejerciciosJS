/* EJERCICIO 10:
Se cuenta con la siguiente información:
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.
Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).
• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor. */
let turnoManiana = [];
let turnoTarde = [];
let turnoNoche = [];
let promedioManiana = 0;
let promedioTarde = 0;
let promedioNoche = 0;
let edad = 0;

for (let i = 0; i < 3; i++) {
  let j = 0;
  if (i == 0) {
    j = 5;
  } else if (i == 1) {
    j = 6;
  } else {
    j = 11;
  }

  for (let k = 0; k < j; k++) {
    if (j == 5) {
      edad = parseInt(
        prompt(`Ingrese la edad del alumno (turno de mañana: ${k + 1}/5)`)
      );
      turnoManiana.push(edad);
      promedioManiana += edad;
    } else if (j == 6) {
      edad = parseInt(
        prompt(`Ingrese la edad del alumno (turno de tarde: ${k + 1}/6)`)
      );
      turnoTarde.push(edad);
      promedioTarde += edad;
    } else {
      edad = parseInt(
        prompt(`Ingrese la edad del alumno (turno de noche: ${k + 1}/11)`)
      );
      turnoNoche.push(edad);
      promedioNoche += edad;
    }
  }
}

promedioManiana = Math.floor(promedioManiana / turnoManiana.length);
promedioTarde = Math.floor(promedioTarde / turnoTarde.length);
promedioNoche = Math.floor(promedioNoche / turnoNoche.length);

if (promedioManiana > promedioTarde && promedioManiana > promedioNoche) {
  alert(
    `Promedios de Edad\nMañana: ${promedioManiana}\nTarde: ${promedioTarde}\nNoche: ${promedioNoche}\nEl turno de la mañana tiene el mayor promedio de edad`
  );
} else if (promedioTarde > promedioManiana && promedioTarde > promedioNoche) {
  alert(
    `Promedios de Edad\nMañana: ${promedioManiana}\nTarde: ${promedioTarde}\nNoche: ${promedioNoche}\nEl turno de la tarde tiene el mayor promedio de edad`
  );
} else {
  alert(
    `Promedios de Edad\nMañana: ${promedioManiana}\nTarde: ${promedioTarde}\nNoche: ${promedioNoche}\nEl turno de la noche tiene el mayor promedio de edad`
  );
}
