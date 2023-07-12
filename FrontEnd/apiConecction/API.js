const url = "http://localhost:5000/categoria/all"
/*  obtener todos los cmapers de la API (GET) Metodo HTTP */

export const getCategorias = async ()=>{
    try {
        const answer = await fetch(url);
        const Categorias = await answer.json();
        return Categorias
    } catch (error) {
        console.log(error);
        
    }
}