/* 2. importamos la funcion metodo HTTP -GET */
import {getCategorias,deleteCategoria,addCategoria} from '../apiConecction/APIcategorias.js'; 


/* 1. function IIFE */
(function () {
    const eliminar = document.querySelector(".lista");
    document.addEventListener('DOMContentLoaded',showcategorias)
    
    eliminar.addEventListener("click",borrar);
    async function showcategorias(){
        console.log("desde IIFE");
        const categorias = await getCategorias();
        console.log(categorias);
        const contedor = document.querySelector('tbody')
        categorias.forEach(params => {
            const {_id,imagen,nombre,descripcion}= params;
            const rows = document.createElement('tr')
            rows.innerHTML = `

            <th>${_id}</th>
            <th><${imagen}</th>
            <th>${nombre}</th>
            <th>${descripcion}</th>
            <th><button type="button" class="boton-Modal btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" detalle= "">
            Updtade
            </button></th>
            <th><button type = "button" id="${_id}" class = "btn btn-outline-danger delete">Delete</button></th>
            
            `
            contedor.append(rows)
            
        });
    }


    function borrar(e) {
    if (e.target.classList.contains("delete")) {
        console.log(e.target);
        const idCategoria = e.target.getAttribute("id");
        const confir = confirm("Desea eliminar este Empleado?");
        if (confir) {
        deleteCategoria (idCategoria);
        }
    }
    }

    //Insert
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", insertCategoria);

    function insertCategoria(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const descripcion = document.querySelector("#descripcion").value;
    const imagen = document.querySelector("#imagen").value;

    const categoria = {
        imagen,
        nombre,
        descripcion
    };


    if (validation(categoria)) {
        alert("Todos los datos son obligatorios");
        return;
    }
    alert("Datos guardados correctamente.");
    return addCategoria(categoria);
    };

    function validation(Objeto) {
    return !Object.values(Objeto).every((element) => element !== "");
    };

    
})();