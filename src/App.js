
import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
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
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    //spread operator, le agrega otro elemento al arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = () => {
    console.log("Eliminar Colaborador")
  }

  const actualizaColor = (color, titulo) => {
   // console.log("Actualizar: ", color, titulo)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color 
      }
      
      return equipo
    }) 
    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <div></div>*/}
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {/*Ternario --> condicion ? seMuestra : noSeMuestra */}
      {/*condicion && seMuestra*/}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
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
          eliminarColaborador={eliminarColaborador}
          actualizaColor={actualizaColor}
        />
        )
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
