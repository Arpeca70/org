import "./Equipo.css"

const Equipo = (props) => {

    //Destructuracion
    // sacar los parametros del objeto datos con props
    const {titulo, colorPrimario, colorSecundario} = props.datos

    //const estiloTitulo = {borderColor:colorPrimario} y lo cambio en el style={estiloTitulo}
    return <section className="equipo" style={{backgroundColor:colorSecundario}}>
        <h3 style={{borderColor:colorPrimario}}>{titulo}</h3>
        <div className="colaboradores"></div>
            
    </section>
}

export default Equipo