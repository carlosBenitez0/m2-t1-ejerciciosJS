/* EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%. */
let origen = "ciudad de Palma";
let descuentoViaje = "0%";
function calcularDescuento() {
  destino = prompt(
    "¿Cual es su lugar de destino?\n1-La costa del sol\n2-Panchimalco\n3-El Puerto el Triunfo"
  );
  switch (destino) {
    case "1":
      descuentoViaje = "5%";
      break;
    case "2":
      descuentoViaje = "10%";
      break;
    case "3":
      descuentoViaje = "15%";
      break;
    default:
      console.log("Escoja una opcion válida");
      break;
  }
  alert(`El descuento aplicado para su viaje es del ${descuentoViaje}`);
}
calcularDescuento();
