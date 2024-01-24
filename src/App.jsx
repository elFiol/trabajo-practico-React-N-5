import { Container } from "react-bootstrap"
import FormularioTarea from "./components/FormularioTarea";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="my-4 mainPage">
      <h1 className="text-center text-light">Lista de tareas</h1>
      <FormularioTarea></FormularioTarea>
    </Container>)
}

export default App
