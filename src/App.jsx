import { Button, Container, Spinner } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logoSimpsons.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarFrase, setmostrarFrase] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  async function consultarAPI() {
    try {
      setmostrarFrase(false);
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      setPersonaje(dato[0]);
      setmostrarFrase(true);
      // console.log(respuestaJSON);
    } catch (error) {
      console.log(error);
    }
  }

  const mostrarComponente = mostrarFrase ? (
    <Frase personaje={personaje}></Frase>
  ) : (
    <div>
      <Spinner animation="grow" variant="light" />
    </div>
  );

  return (
    <>
      <Container className="text-center">
        <img src={logo} alt="Logo de los Simpsons" className="logo-img" />
        {mostrarComponente}
        <Button className="mt-3 mb-5 fs-4" variant="warning" onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </Container>
    </>
  );
}

export default App;
