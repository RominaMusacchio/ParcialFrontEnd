import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  
  const [nombre,setNombre] = useState("");
  const [banda,setBanda] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);


  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    console.log(nombre);
  }
  const handleChangeBanda = (event) => {
    setBanda(event.target.value);
    console.log(banda);
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    if(
      nombre.length >=3 &&
      !nombre.startsWith(" ") &&
      banda.length >= 6
    ){
      setMostrarCard(true);
      console.log("Puedo mostrar");
    }
    else{
      setMostrarCard(false);
      console.log("No puedo mostrar")
    }

  }

  return (
    <>
      <div className="App">
        <h1>Lista de Bandas</h1>
        <form onSubmit={handleSubmit}>
          <label>Ingresa tu nombre:</label> <input type="text" onChange={handleChangeNombre}/>
          <label>Ingresa tu banda favorita:</label> <input type="text" onChange={handleChangeBanda}/>
          <button >Confirmar</button>
        </form>
      </div>

      {mostrarCard ? (
        <Card nombre={nombre} banda={banda}/>
      
    ) :(
    <div>
      Por favor chequea que la información sea correcta
    </div>
    )}
      
    </>
  )
}

export default App
