import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    // sacar los parametros del objeto datos con props
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores, eliminarColaborador, actualizaColor } = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }
    //const estiloTitulo = {borderColor:colorPrimario} y lo cambio en el style={estiloTitulo}
    //en esta condicion si viene verdadera la longitud del arreglo se mostrara el equipo en pantalla, si viene vacio
    //el arreglo no mostrara ese equipo 
    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type='color'
                    className="input-color"
                    value={colorPrimario}
                    onChange={(event) => {
                        actualizaColor(event.target.value, titulo)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo