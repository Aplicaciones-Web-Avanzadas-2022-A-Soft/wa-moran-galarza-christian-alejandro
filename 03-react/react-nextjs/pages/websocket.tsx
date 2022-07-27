import Layout from "../components/Layout";
import {useEffect, useState} from "react";
import io from "socket.io-client"
const servidorWebSocket = 'http://localhost:8080';
const socket = io(servidorWebSocket);



export default function WebSocket(){
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [mensajes, setMensajes] = useState([] as {mensaje: string}[])

    useEffect(
        () => {
            socket.on('connect', () => {
                setIsConnected(true);
                console.log("Si está conectado");
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log("No está conectado");
            });
            socket.on('escucharEventoHola',
                (data: {mensaje:string}) => {
                const nuevoMensaje = {
                    mensaje: data.mensaje
                };
                setMensajes((mensajeAnteriores)=>
                    [...mensajeAnteriores, nuevoMensaje]);
            });
        },
        []
    )

    const enviarEventoHola = () => {
        const nuevoMensaje = {
            mensaje: 'Chris'
        };
        socket.emit(
            'hola', // Nombre Evento
            nuevoMensaje, //  Datos evento
            (datosEventoHola) => { // Callback o respuesta del evefnto
                setMensajes((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
            }
        )
    }

    return(
        <>
            <Layout title="WebSocket">
                <h1>Websockets</h1>
                <button className="btn btn-success" onClick={()=> enviarEventoHola()}>Enviar evento hola</button>
                <ul>
                    {mensajes.map((mensaje,indice)=>
                    <li key={indice}>{mensaje.mensaje}</li>)}
                </ul>
            </Layout>
        </>
    )
}
