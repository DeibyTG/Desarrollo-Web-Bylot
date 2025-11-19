




export function f_verDesplegableServicios(){
    console.log('estoy enlazado');

    const botonServicios=document.getElementById('botonServicios');
    const verServicios=document.getElementById('enlacesMobil');
   
    if (!botonServicios || !verServicios) return;

    botonServicios.addEventListener('click', (e) => {
      e.stopPropagation(); 
      verServicios.classList.toggle('mostrar');
    });
  
    document.addEventListener('click', (e) => {
      if (!botonServicios.contains(e.target) && !verServicios.contains(e.target)){
        verServicios.classList.remove('mostrar');
      }
    });


}


export function f_activarBotonServicios(){
  const contendorBoton=document.getElementById('botonServicios');
  const contenedorInfo=document.querySelector('.contenedor-enlaces-nav');


  contendorBoton.addEventListener('click',()=>{

    if(contenedorInfo.classList.contains('desplegado')){
      contenedorInfo.classList.remove('desplegado');
    }else{
      contenedorInfo.classList.add('desplegado');
    }

  });


}

export function f_activarMenuDeplegable(){

  const contenedorIcono=document.getElementById('fotoMenu');
  const contenedorOpciones=document.querySelector('.contenedor-opciones-header');

  contenedorIcono.addEventListener('click',()=>{
    if(contenedorOpciones.classList.contains('visible')){
      contenedorOpciones.classList.remove('visible');
    }else{
      contenedorOpciones.classList.add('visible');
    }
  })
}