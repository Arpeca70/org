
import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([])
  

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
  //spread operator
    actualizarColaboradores([...colaboradores,colaborador])
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
      <Header/>
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {/*Ternario --> condicion ? seMuestra : noSeMuestra */} 
      {/*condicion && seMuestra*/} 
      {
        mostrarFormulario && <Formulario
            equipos={equipos.map((equipo)=> equipo.titulo)}
            registrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>

      {
        //variable (equipo) es un parametro en esta funcion arrow, puede llamarse como sea, no 
        //estoy trayendo ningun valor anterior, este parametro me devuelve los 
        //valores de mi arreglo por estar dentro de MAP
        //equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />) las dos son validas,
        //codigo mas limpio este pero dejare el anterior para entenderlo mejor
      }
      {
          equipos.map((equipo) => <Equipo 
              datos={equipo} 
              key={equipo.titulo} 
              colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            />
          )
        }
      <Footer></Footer>
    </div>
  );
}

export default App;
