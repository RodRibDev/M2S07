import "./App.css";
import InputControlado from "./components/InputControlado";
import Contador from "./components/contador";
import Form from "./components/form";
import Lista from "./components/lista";
import Noticia from "./components/noticia";

export default function App() {
  return <>
  <Contador></Contador>
  <hr className="separator" />
  <Noticia></Noticia>
  <hr className="separator" />
  <Lista></Lista>
  <hr className="separator" />
  <Form></Form>
  <hr className="separator" />
  <InputControlado></InputControlado>
  </>

}
