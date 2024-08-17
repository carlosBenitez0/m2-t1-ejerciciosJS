/* EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
ACADEMIA DE TECNOLOGÍA CREATIVA
KODIGO */
const select = document.getElementById("select");
const descuento = document.getElementById("descuento");

select.addEventListener("input", () => {
  if (select.value == "ford-fiesta") {
    descuento.innerText = "5";
  } else if (select.value == "ford-focus") {
    descuento.innerText = "20";
  } else if (select.value == "ford-escape") {
    descuento.innerText = "10";
  }
});
