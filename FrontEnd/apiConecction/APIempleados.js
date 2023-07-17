const urlAll = "http://localhost:5000/empleados/all";
const urlDel = "http://localhost:5000/empleados/del";
const urlAdd = "http://localhost:5000/empleados/add";
const urlUpd = "http://localhost:5000/empleados/upt";

/*  obtener todos los cmapers de la API (GET) Metodo HTTP */

export const getEmpleados = async ()=>{
    try {
        const answer = await fetch(urlAll);
        const empleados = await answer.json();
        return empleados
    } catch (error) {
        console.log(error);
        
    }
}
export const addEmpleados = async (empleados)=>{
    console.log(empleados);
    try{
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(empleados),
            headers : {
                'content-Type': 'application/json'
            } 

        })
        window.location.href = "empleados.html"
    }catch(error){
        console.log(error);
    }

}

/* eliminar clientes metodo HTTP DELETE */

export const deleteEmpleados = async (id)=>{
    try {
        await fetch(`${urlDel}/${id}`,{
            method : "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href = "empleados.html";
    } catch (error) {
        console.log(error);
        
    }
}
