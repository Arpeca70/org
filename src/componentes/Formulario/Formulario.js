import "./Formulario.css"
//El import de CampoTexto solo se le pone la ruta sin el nombre del archivo 
//porque su nombre es index.js y ese es el nombre por default.
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"

const Formulario = () => {
    return <section className="formulario">
            <form >
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" />
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" />
                <CampoTexto titulo="Foto" placeholder="Ingresar Foto" />
                <ListaOpciones />
            </form>
        </section>
}

export default Formulario