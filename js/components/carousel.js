
export function f_verMarmol(){

    const contenedor_marmol_granito=document.getElementById('landing-page-main');
    const seccion_marmol_granito=document.querySelector(".deslizador-landingPage");

        if (seccion_marmol_granito) {
            if (window.scrollY > 250) {
                seccion_marmol_granito.classList.add('deslizar-izquierda');
                contenedor_marmol_granito.classList.add('deslizar-contenido-izquierda');
                return;
            }    
        }          
}

export function f_verEcommerce(){

    const contenedor_verticales=document.getElementById('ecommerce-main');

        if(window.scrollY > 1200){
            contenedor_verticales.classList.add('visible');
        }
}



export function f_carousel(){

    const contenedorSlider=document.getElementById('carousel-seccion1');
    const fotosSlider=document.querySelectorAll('.contenido-carousel');

    let indexCarousel=0;
    let totalSlides=fotosSlider.length;


    const primeraImagen=fotosSlider[0].cloneNode(true);
    contenedorSlider.appendChild(primeraImagen);

    const totalCon=totalSlides + 1;

        function deslizarFotos(){
            indexCarousel ++;
            contenedorSlider.style.transition=`transform 0.6s ease`;
            contenedorSlider.style.transform=`translateX(-${indexCarousel * 100}%)`;


            if(indexCarousel===totalSlides){
                setTimeout(()=>{
                    contenedorSlider.style.transition='none'
                    contenedorSlider.style.transform='translateX(0%)';
                    indexCarousel=0
    
                    void contenedorSlider.offsetWidth;
    
                    setTimeout(() => {
                    contenedorSlider.style.transition = 'transform 0.6s ease';
                    },20);
            },600);
            }
        }

    setInterval(deslizarFotos,3000)


}




        