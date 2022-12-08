/* Alerta cuando se hace click en una ciudad en el navbar */

/** Obtener todos los elementos que tienen la clase .nav-link y añadirle el onclick */
var ciudades = document.querySelectorAll(".nav-link");

for (let i = 0; i < ciudades.length; i++) {
    ciudades[i].addEventListener("click", cityAlert);
}

function cityAlert() {
    alert("Loading weather report...");
}

/* Cerrar mensaje de cookies al hacer click en 'aceptar' */

function removeCookies() {
    document.querySelector(".cookie-policy-message").remove();
}

/** Cambiar las temperaturas a fahrenheit o celsius cuando se cambia en el select */

/** Obtener el elemento select para saber el valor actual */
var menuTemperaturas = document.querySelector("#temperatures");

/** Obtener todos los elementos de temperaturas para convertir */
var temperaturas = document.querySelectorAll(".temperature-value");

function changeTemperature() {

    for (let i = 0; i < temperaturas.length; i++) {

        if (menuTemperaturas.value == "°C") {
            temperaturas[i].innerText = Math.round(5/9 * (temperaturas[i].innerText - 32));

        }else{
            temperaturas[i].innerText = Math.round(temperaturas[i].innerText * 9/5 + 32);
        }
    }
}

