import "./Formulario.css"
//El import de CampoTexto solo se le pone la ruta sin el nombre del archivo 
//porque su nombre es index.js y ese es el nombre por default.
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () => {

    const manejarEnvio = (event)=> {
        event.preventDefault()
    }

    return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required />
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar Foto" required />
                <ListaOpciones />
                <Boton>Crear</Boton>
            </form>
        </section>
}

export default Formulario