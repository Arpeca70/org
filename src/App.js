
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
// Lista de equipos
  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "",
      colorSecundario: ""
    },
    {
      titulo: "Fornt End",
      colorPrimario: "",
      colorSecundario: ""
    },
    {
      titulo: "Data Science",
      colorPrimario: "",
      colorSecundario: ""
    },
    {
        titulo: "Devops",
        colorPrimario: "",
        colorSecundario: ""
      },
      {
        titulo: "UX y Diseño",
        colorPrimario: "",
        colorSecundario: ""
      },
      {
        titulo: "Movil",
        colorPrimario: "",
        colorSecundario: ""
      },
      {
        titulo: "Innovacion y Gestion",
        colorPrimario: "",
        colorSecundario: ""
      }
  ]

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      <Equipo equipo="Programacion"/>
      <Equipo equipo="Fornt End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX y Diseño"/>
      <Equipo equipo="Movil"/>
      <Equipo equipo="Innovacion y Gestion"/>
    </div>
  );
}

export default App;
