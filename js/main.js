//funciones desde carousel
import{
    // f_carousel,
    f_verMarmol,
    f_verEcommerce,
} from "./components/carousel.js";

//funciones desde data
import {
    f_datosJson,
    //  f_actualizarPresupuesto
} from "./data/data.js";

//funciones desde navbar
import{
    activateLinkOnScroll
} from "./ui/navbar.js";

import{
    // validar
} from"./utils/validator.js";

import{
    f_verMapa
} from "./vendors/someLib.js";

import{
    f_verDesplegableServicios,
    f_activarBotonServicios,
    f_activarMenuDeplegable
} from './ui/userAction.js';


// agrupamos los listeners que cargan con la pagina
window.addEventListener("DOMContentLoaded",()=>{
    f_activarBotonServicios();
    f_activarMenuDeplegable();
    // f_verDesplegableServicios();
    // f_carousel();
    // f_verMapa();
    
    
    const form = document.getElementById("formulario1");

    if (form){
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validar(form)) {
                form.submit();
            }
        });
    }
});

//agrupamos los listener scroll
window.addEventListener("scroll",()=>{
    f_datosJson();
    f_verMarmol();
    f_verEcommerce();
     activateLinkOnScroll();
});

document.addEventListener('change',()=>{
    f_actualizarPresupuesto();
});

