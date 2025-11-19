
export function validar(formulario){

    const valorNombre=formulario.nombre.value.trim();
    const valorApellido=formulario.apellidos.value.trim();
    const valorTelefono=formulario.telefono.value.trim();
    const valorCorreo=formulario.correo.value.trim();
    const soloLetras=/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros=/^[0-9]+$/;
    const validacionCorreo=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (valorNombre === "") {
        alert("El campo nombre no puede estar vacío");
        return false;
    }

    if (!soloLetras.test(valorNombre)) {
        alert("El campo nombre solo puede contener letras");
        return false;
    }

    if(!soloLetras.test(valorApellido)){
        alert("El campo nombre solo puede contener letras");
        return false;
    }
   
    if(valorTelefono===""){
        alert('este campo tampoco puede estar vacio');
        return false;
    }

    if(!soloNumeros.test(valorTelefono)){
        alert('este campo solo puede contener numeros');

        return true; 
    }

    if(!validacionCorreo.test(valorCorreo)){
        alert('el correo tiene que contener un formato valido');
        return true; 
    }
}
