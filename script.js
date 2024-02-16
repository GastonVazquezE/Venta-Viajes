// Importar los objetos desde el modulo ciudades.js
import { barcelona, paris, roma, londres } from "./ciudades.js";

// Obtener elementos del DOM
let enlaces = document.querySelectorAll('a');
let imagen = document.getElementById('img')
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
let btnComprarElemento = document.getElementById('btn-comprar');

// Agregar un evento click a cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(){
        // Remover la clase "active" a los enlaces
        enlaces.forEach(enlace => {
            enlace.classList.remove('active');
        });
        
        // Agregar "active" al que corresponda
        this.classList.add('active');

        // Traer info del objeto seleccionado
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido
        imagen.removeAttribute('hidden');
        btnComprarElemento.removeAttribute('hidden');
        imagen.setAttribute('src', contenido.imagen);
        imagen.setAttribute('alt', contenido.titulo);
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    
    });
});

// Funcion para traer info desde ciudades.js
function obtenerContenido (enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };

    return contenido[enlace];
}