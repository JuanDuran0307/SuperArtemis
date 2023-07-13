const urlAll = "http://localhost:5000/categoria/all";
const urlDel = "http://localhost:5000/categoria/del";
const urlAdd = "http://localhost:5000/categoria/add";
const urlUpd = "http://localhost:5000/categoria/upd";

/*  obtener todos los cmapers de la API (GET) Metodo HTTP */

export const getCategorias = async ()=>{
    try {
        const answer = await fetch(urlAll);
        const Categorias = await answer.json();
        return Categorias
    } catch (error) {
        console.log(error);
        
    }
}
export const addCategoria = async (categoria)=>{
    console.log(categoria);
    try{
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(categoria),
            headers : {
                'content-Type': 'application/json'
            } 

        })
        window.location.href = "categorias.html"
    }catch(error){
        console.log(error);
    }

}

/* eliminar clientes metodo HTTP DELETE */

export const deleteCategoria = async (id)=>{
    try {
        await fetch(`${urlDel}/${id}`,{
            method : "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href = "categorias.html";
    } catch (error) {
        console.log(error);
        
    }
}
