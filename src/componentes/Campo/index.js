
import "./Campo.css"

const Campo = (props) => {
    //const [valor, setValor] = useState("")
    //console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion traer por medio de props el valor type,
    //si viene vacio, que le asigne text.
    const { type = "text" } = props

    //funcion manejarCambio
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo