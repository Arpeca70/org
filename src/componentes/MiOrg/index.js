import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)

    //const [mostrar, actualizarMostrar] = useState(true)
    //console.log(props)
    //const manejarClick = () => {
    //   console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg