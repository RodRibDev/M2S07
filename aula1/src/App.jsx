import "./App.css";
import Contador from "./components/contador";
import Lista from "./components/lista";
import Noticia from "./components/noticia";

export default function App() {
  return <><Contador></Contador>
  <hr className="separator" />
  <Noticia></Noticia>
  <hr className="separator" />
  <Lista></Lista>
  </>

}
