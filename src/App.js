
import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  // Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // Lista de equipos (arreglo de objetos)
  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Fornt End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo)=> equipo.titulo)}/>}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>

      {
        //variable (equipo) es un parametro en esta funcion arrow, puede llamarse como sea, no 
        //estoy tryendo ningun valor anterior, este parametro me devuelve los 
        //valores de mi arreglo por estar dentro de MAP

        //equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />) las dos son validas,
        //codigo mas limoio este pere dejare el anterior para entenderlo mejor
        equipos.map((equipo) => {
          return <Equipo datos={equipo} key={equipo.titulo} />
        }
        )}

    </div>
  );
}

export default App;
