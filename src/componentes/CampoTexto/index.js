import "./CampoTexto.css"

const CampoTexto = (props) => {

//    console.log("Datos: ", props);
    const placeholderModificado = `${props.placeholder}...`

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} />
    </div>
}

export default CampoTexto