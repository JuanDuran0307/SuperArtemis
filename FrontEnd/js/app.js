/* 2. importamos la funcion metodo HTTP -GET */
import {getCategorias} from '../apiConecction/API.js'; 


/* 1. function IIFE */
(function () {
        const lista = document.querySelector(".lista")
        
    document.addEventListener('DOMContentLoaded',showclientes)
    lista.addEventListener('click',confirmdelete)
    async function showclientes(){
        console.log("desde IIFE");
        const clientes = await getCategorias();
        console.log(clientes);
        const contedor = document.querySelector('tbody')
        clientes.forEach(camper => {
            const {id,imagen,nombre,descripcion}= camper;
            const rows = document.createElement('tr')
            rows.innerHTML = `

            <th>${id}</th>
            <th><img src = "img/${imagen}" class= "cuenta"></th>
            <th>${nombre}</th>
            <th>${descripcion}</th>
            <th><button type="button" class="boton-Modal btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" detalle= "${detalle}">
            Detalle
            </button></th>
            <th><button type = "button" data-camper="${id}" class = "btn btn-outline-danger delete">Delete</button></th>
            
            `
            contedor.append(rows)
            
        });
    }

    function confirmdelete(e) {
        if(e.target.classList.contains('delete')){
            console.log("diste click en el boton delete");
            const camperid = parseInt(e.target.dataset.camper);
            const confirmar = confirm('¿Desea eliminar al camper para que se quede en casa?')
            if(confirmar){
                deletecamper(camperid);
            }
            
        }

        
    }
    
})();