import { Button, Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logoSimpsons.png';
import Frase from './components/Frase';
import { useEffect, useState } from 'react';

function App() {

  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[]);

  async function consultarAPI(){
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON)
  }

  return (
    <>
    <Container className='text-center'>
      <img src={logo} alt="Logo de los Simpsons" className='logo-img'/>
      <Frase></Frase>
      <Button className='mt-3' variant="warning">Obtener Frase</Button>
    </Container>
    </>
  )
}

export default App
