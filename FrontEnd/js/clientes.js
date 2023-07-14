import { getClientes,deleteClientes } from "../apiConecction/APIclientes.js";

(function(){
    const eliminar = document.querySelector(".lista");
    eliminar.addEventListener('DOMContentLoaded',borrar);
    document.addEventListener('DOMContentLoaded',showClientes)
    
    async function showClientes(){
        const clientes = await getClientes();
        console.log(clientes);
        const content = document.querySelector('tbody');
        clientes.forEach(element => {
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
            const idCliente = e.target.getAttribute("id");
            const confirm = confirm("¿Desea eliminar al cliente?");
            if(confirm){
                deleteClientes(idCliente);
            }
        }
    }



})();