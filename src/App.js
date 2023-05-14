import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

function App() {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [palavraUsuario, setPalavraUsuario] = useState([]);

  const [teclas, setTeclas] = useState(
    alfabeto.map((letra) => <button disabled>{letra.toUpperCase()}</button>)
  );

  return (
    <div className="container">
      <Jogo
        erros={5}
        palavraUsuario={palavraUsuario}
        setPalavraUsuario={setPalavraUsuario}
        setPalavraSecreta={setPalavraSecreta}
        alfabeto = {alfabeto}
        teclas={teclas}
        setTeclas={setTeclas}
      />
      <Letras teclas={teclas} setTeclas={setTeclas} />
    </div>
  );
}

export default App;
