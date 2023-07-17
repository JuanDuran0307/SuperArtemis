import { getClientes,deleteClientes,addClientes } from "../apiConecction/APIclientes.js";

(function(){
    const eliminar = document.querySelector(".lista");
    eliminar.addEventListener('DOMContentLoaded',borrar);
    document.addEventListener('DOMContentLoaded',showClientes)
    
    async function showClientes(){
        const clientes = await getClientes();
        console.log(clientes);
        const content = document.querySelector('tbody');
        clientes.forEach(element => {
            const {_id,compañia,Contacto,Titulo,Direccion,Ciudad,Pais,Telefono} = element;
            const rows = document.createElement('tr')
            rows.innerHTML = `
                <th>${_id}</th>
                <th>${compañia} </th>
                <th>${Contacto} </th>
                <th>${Titulo} </th>
                <th>${Direccion} </th>
                <th>${Ciudad} </th>
                <th>${Pais} </th>
                <th>${Telefono} </th>
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
            const idCliente = e.target.getAttribute("id");
            const confirm = confirm("¿Desea eliminar al cliente?");
            if(confirm){
                deleteClientes(idCliente);
            }
        }
    }

        
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", insertClientes);
    
        function insertClientes(e) {
        e.preventDefault();
        const compañia = document.querySelector("#compañia").value;
        const Contacto = document.querySelector("#Contacto").value;
        const Titulo = document.querySelector("#Titulo").value;
        const Direccion = document.querySelector("#Direccion").value;
        const Ciudad = document.querySelector("#Ciudad").value;
        const Pais = document.querySelector("#Pais").value;
        const Telefono = document.querySelector("#Telefono").value;


    
        const clientes = {
            compañia,
            Contacto,
            Titulo,
            Direccion,
            Ciudad,
            Pais,
            Telefono
        };
    
    
        if (validation(clientes)) {
            alert("Todos los datos son obligatorios");
            return;
        }
        alert("Datos guardados correctamente.");
        return addClientes(clientes);
        };
    
        function validation(Objeto) {
        return !Object.values(Objeto).every((element) => element !== "");
        };



})();