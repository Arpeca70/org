
import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map para recorrer arreglos 
    /*const equipos = [
        "Programacion",
        "Fornt End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]*/

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleciona equipo</option>
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>

    </div>
}

export default ListaOpciones