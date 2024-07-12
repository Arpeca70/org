import { useState } from "react"
import "./Formulario.css"
//El import de CampoTexto solo se le pone la ruta sin el nombre del archivo 
//porque su nombre es index.js y ese es el nombre por default.
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
//import { IoColorFilter } from "react-icons/io5"

const Formulario = (props) => {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        // console.log("Maneja el envio")
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        registrarColaborador(datosAEnviar)
        //console.log(datosAEnviar)
    }
    //funcion para manejar la creacion un equipo nuevo en el formulario equipo
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        //console.log(titulo,color)
        //nueva version de javascript no se necesita escribir el objeto de esta 
        //manera y se puede escribir como se dejo escrito 
        //crearEquipo({titulo:titulo,color:color})
        //crearEquipo({titulo,color})
        //siempre que se llamen igual, elemento y variables.
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={setNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto}
                actualizarValor={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar Foto"
                required
                valor={foto}
                actualizarValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={setEquipo}
                equipos={props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar el titulo"
                required
                valor={titulo}
                actualizarValor={setTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={setColor}
                type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario