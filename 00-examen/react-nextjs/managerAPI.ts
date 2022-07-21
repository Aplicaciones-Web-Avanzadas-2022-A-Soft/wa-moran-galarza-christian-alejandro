import {ManagerInterface} from "./pages/manager";

export interface Result{
    result?: any;
    error?: string;
}

export async function crearManager(manager: ManagerInterface): Promise<ManagerInterface>{
    const options = {
        headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
        method: 'POST',
        body: JSON.stringify(manager)
    }
    const url = `http://localhost:8080/managers`
    const respuesta = await fetch(url, options);
    return await respuesta.json();
}

export async function listarManagers(): Promise<Result>{
    const options = {
        headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
        method: 'GET'
    }
    const url = `http://localhost:8080/managers`
    const respuesta = await fetch(url, options);
    return await respuesta.json();
}

export async function actualizarManager(id: number, manager: ManagerInterface){
    const nuevo = {nombre: manager.nombre, cedula: manager.cedula} as ManagerInterface
    const options = {
        headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
        method: 'PUT',
        body: JSON.stringify(nuevo)
    }
    const url = `http://localhost:8080/managers/`+id
    const respuesta = await fetch(url, options);
    return await respuesta.json();
}

export async function borrarManager(id: number): Promise<Result>{
    const options = {
        headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
        method: 'DELETE'
    }
    const url = "http://localhost:8080/managers/"+id;
    const response = await fetch(url,options);
    return await response.json();
}