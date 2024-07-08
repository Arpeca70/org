
import "./ListaOpciones.css"

const ListaOpciones = () => {

    // Metodo map para recorrer arreglos 
    const equipos = [
            "Programacion",
            "Fornt End",
            "Data Science",
            "UX y Diseño",
            "Movil",
            "Innovacion y Gestion"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index )=> {
                return <option key={index}>{equipo}</option>
            })}
        </select>

    </div>
}

export default ListaOpciones