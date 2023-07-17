const urlAll = "http://localhost:5000/clientes/all";
const urlDel = "http://localhost:5000/clientes/del";
const urlAdd = "http://localhost:5000/clientes/add";
const urlUpt = "http://localhost:5000/clientes/upt";


const getClientes = async ()=>{
    try {
        const answer = await fetch(urlAll);
        const clientes = await answer.json();
        return clientes;
        
    } catch (error) {
        console.log(error);
        
    }
}

const deleteClientes = async(id)=>{
    try {
        await fetch(`${urlDel}/${id}`,{
            method : "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        })
        window.location.href = "clientes.html";
    } catch (error) {
        console.log(error);
        
    }
}

    const addClientes = async (cliente)=>{
    console.log(cliente);
    try{
        await fetch(`${urlAdd}/`,{
            method: "POST",
            body: JSON.stringify(cliente),
            headers : {
                'content-Type': 'application/json'
            } 

        })
        window.location.href = "clientes.html"
    }catch(error){
        console.log(error);
    }

}



export {getClientes,deleteClientes,addClientes};