// functions/http/todos.http.ts

export interface Result{
    result?: any;
    error?: string;
}

export async function TodosHttp(): Promise<Result>{
    const options = {
        headers: {'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
        method: 'GET'
    }
    const url = `http://localhost:8080/managers`
    const respuesta = await fetch(url, options);
    return await respuesta.json();
}