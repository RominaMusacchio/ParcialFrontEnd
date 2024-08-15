import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Styles/Form.css'
import './index.css'
import Card from './Components/Card'

function App() {
  
  const [nombre,setNombre] = useState("");
  const [banda,setBanda] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState(false);

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
      setError(true);
      console.log("No puedo mostrar")
    }

  }

  return (
    <>
      <div className="App">
        <h1>Cual es tu banda favorita?</h1>
        <form onSubmit={handleSubmit}>
          <label>Ingresa tu nombre:</label> <input type="text" onChange={handleChangeNombre}/>
          <label>Ingresa tu banda favorita:</label> <input type="text" onChange={handleChangeBanda}/>
          <button type="submit">Enviar</button>
        </form>
      </div>


      {mostrarCard ? (
        <Card nombre={nombre} banda={banda}/>
      
    ) :( error && (
    <div>
      Por favor chequea que la información sea correcta
    </div>
    ))}
      
    </>
  )
}

export default App
