import { getEmpleados,deleteEmpleados,addEmpleados } from "../apiConecction/APIempleados.js";

(function(){
    const eliminar = document.querySelector(".lista");
    eliminar.addEventListener('DOMContentLoaded',borrar);
    document.addEventListener('DOMContentLoaded',showEmpleadoss)
    
    async function showEmpleadoss(){
        const empleados = await getEmpleados();
        console.log(empleados);
        const content = document.querySelector('tbody');
        empleados.forEach(element => {
            const {_id,nombre,edad,celular,correo} = element;
            const rows = document.createElement('tr')
            rows.innerHTML = `
                <th>${_id}</th>
                <th>${nombre} </th>
                <th>${edad} </th>
                <th>${celular} </th>
                <th>${correo} </th>
                <th><button type="button" class="boton-Modal btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" detalle= "">
                Updtade
                </button></th>
                <th><button type = "button" id="${_id}" class = "btn btn-outline-danger delete">Delete</button></th>
    
            
            `
            content.append(rows);
        });
    }

    function borrar(e){
        if(e.target.classList.contains("delete")) {
            const idEmpleado = e.target.getAttribute("id");
            const confirm = confirm("¿Desea eliminar al Empleado?");
            if(confirm){
                deleteEmpleados(idEmpleado);
            }
        }
    }
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", insertEmpleados);

    function insertEmpleados(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const celular = document.querySelector("#celular").value;
    const correo = document.querySelector("#correo").value;

    const empleados = {
        nombre,
        edad,
        celular,
        correo
    };


    if (validation(empleados)) {
        alert("Todos los datos son obligatorios");
        return;
    }
    alert("Datos guardados correctamente.");
    return addEmpleados(empleados);
    };

    function validation(Objeto) {
    return !Object.values(Objeto).every((element) => element !== "");
    };



})();