/* EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final. */
let alumno = "Carlos";
let carnet = "k093473";
let examen = false; //20%
let tareas = true; //40%
let asistencia = false; //10%
let investigacion = true; //30%

function determinarNota() {
  let notaFinal = 0;
  notaFinal += examen == true ? 20 : 0;
  notaFinal += tareas == true ? 40 : 0;
  notaFinal += asistencia == true ? 10 : 0;
  notaFinal += investigacion == true ? 30 : 0;

  console.log(
    `Información del alumno:\nNombre: ${alumno}\nCarnet: ${carnet}\nNota final: ${notaFinal}`
  );
}
determinarNota();
