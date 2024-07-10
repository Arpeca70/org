import { useState } from "react"
import "./Formulario.css"
//El import de CampoTexto solo se le pone la ruta sin el nombre del archivo 
//porque su nombre es index.js y ese es el nombre por default.
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Maneja el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar Foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
            />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario