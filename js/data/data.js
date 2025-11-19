
//vamos a crear la funcion que pida la informacion del json

export function f_datosJson(){
    if(document.body.id==="body-index"){
        let datosJson= new XMLHttpRequest;
            datosJson.open("GET","./data/infoServicios.json",true);

                datosJson.onreadystatechange=function(){
                    if(datosJson.readyState===4 && datosJson.status===200){
                        let infoServicios=JSON.parse(datosJson.responseText);

                            for(let categoria in infoServicios){
                                if (infoServicios.hasOwnProperty(categoria)){
                                    let h2=document.getElementById("titulo-"+categoria);
                                    let p=document.getElementById("descripcion-"+categoria);
                                    let img=document.getElementById("img-"+categoria);

                                        if(h2 && p){
                                            h2.textContent=infoServicios[categoria].titulo;
                                            p.textContent=infoServicios[categoria].descripcion;
                                            img.src=infoServicios[categoria].foto;
                                        }else{
                                            h2.textContent="no hay titulo detectado";
                                            p.textContent="no hay descripcion detectada";
                                            img.textContent="no tenemos foto ahora mismo";
                                        }
                                }

                            };
                        }
                    }
        datosJson.send();
    }
}


// voy a crear la funcion para actualizar el presupuesto segun lo rellenan
let preciovisible=0;
let descuentoActual=0;
let operacionTotal=0;

export function f_actualizarPresupuesto(formulario){

    const precioLanding=500;
    const precioEcommerce=1300;
    const precioCorporativa=600;
    const precioPersonalizada=1000;

    const paginaSeleccionada=document.getElementById('tiposervicios').value.trim();


        function actulizarNombrePrecio(){
            switch(paginaSeleccionada){
                case "landing":
                    document.getElementById('tipo-pagina').innerHTML="Landing Page";
                    preciovisible=precioLanding;
                    document.getElementById('precioBase').innerHTML=preciovisible+'€';
                break;

                case "ecommerce":
                    document.getElementById('tipo-pagina').innerHTML="Web E-commerce";
                    preciovisible=precioEcommerce;
                    document.getElementById('precioBase').innerHTML=preciovisible+'€';

                break;

                case "corporativa":
                    document.getElementById('tipo-pagina').innerHTML="Web Corporativa";
                    preciovisible=precioCorporativa;
                    document.getElementById('precioBase').innerHTML=preciovisible+'€';
                break;

                case "blog":
                    document.getElementById('tipo-pagina').innerHTML="Blog o página personalizada";
                    preciovisible=precioPersonalizada;
                    document.getElementById('precioBase').innerHTML=preciovisible+'€';
                break;
                }
        }



        const tiempoSeleccionado=document.getElementById('rangoTiempoEstimado');

        function verTiempoEstimado(){
            tiempoSeleccionado.addEventListener('input',function(){
                const actualizarTiempo=document.getElementById('tiempo-estimado');
                const valorActual=tiempoSeleccionado.value;
                    if(valorActual!=1){
                        actualizarTiempo.textContent=`aproximado: ${valorActual} (Semanas)`;
                        document.getElementById('verTiempoEstimado').textContent='Tiempo solicitado para el desarrollo';
                    }else{
                        actualizarTiempo.textContent="";
                        
                    }
            })
        }

        let descuento=10

        function activarDescuento(){
            tiempoSeleccionado.addEventListener('input',function(){
                if(tiempoSeleccionado.value!=1){
                    descuento=10;
                    descuentoActual=descuento*(parseInt(tiempoSeleccionado.value));
                    document.getElementById('descuentoTiempo').textContent=`Descuento aplicado por tiempo ${descuentoActual}€`;
                }else{
                    descuento=0;
                    descuentoActual=0;
                    document.getElementById('descuentoTiempo').textContent="";
                    document.getElementById('verTiempoEstimado').textContent='';
                }
            })

        }

        const precioCalendario = 60;
        const precioPagos = 300;
        const precioPerfiles = 120;
        let extras=0;

        function activarServiciosExtras(){
                let opcion1=document.getElementById('calendario').checked;
                let opcion2=document.getElementById('pagos').checked;
                let opcion3=document.getElementById('perfiles').checked;

                if(opcion1){
                    extras+=precioCalendario;
                    document.getElementById('servicio-extras1').textContent="Servicio Integracion Calendario +60€ \n";
                }else{
                    document.getElementById('servicio-extras1').textContent="";
                }

                if(opcion2){
                    extras+=precioPagos;
                    document.getElementById('servicio-extras2').textContent="Servicio Integracion Pasarela de pago +300€ \n";
                }else{
                    document.getElementById('servicio-extras2').textContent="";
                }
                if(opcion3){
                    extras+=precioPerfiles;
                    document.getElementById('servicio-extras3').textContent="Servicio Integracion Usuarios +120€ \n"
                }else{
                    document.getElementById('servicio-extras3').textContent="";
                };
        }

        document.getElementById('calendario').addEventListener('change', activarServiciosExtras);
        document.getElementById('pagos').addEventListener('change', activarServiciosExtras);
        document.getElementById('perfiles').addEventListener('change', activarServiciosExtras);

        
        function totalPresupuesto(){
            
            operacionTotal=preciovisible-descuentoActual+extras;
            document.getElementById('cantidadTotalPresupuesto').textContent=parseInt(operacionTotal)+'€';

            if(preciovisible===undefined || descuentoActual===undefined || extras===undefined){
                console.log(preciovisible);
                console.log(descuentoActual);
                console.log(extras);
            }
        }


    
    actulizarNombrePrecio();
    activarServiciosExtras();
    activarDescuento();
    verTiempoEstimado();
    totalPresupuesto();

}
    

