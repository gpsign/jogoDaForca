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
  const [palpites, setPalpites] = useState([]);
  const [teclas, setTeclas] = useState(
    alfabeto.map((letra) => (
      <button disabled data-test="letter">
        {letra.toUpperCase()}
      </button>
    ))
  );
  const [erros, setErros] = useState(0);

  return (
    <div className="container">
      <Jogo
        erros={erros}
        setErros={setErros}
        palavraUsuario={palavraUsuario}
        setPalavraUsuario={setPalavraUsuario}
        palavraSecreta={palavraSecreta}
        setPalavraSecreta={setPalavraSecreta}
        alfabeto={alfabeto}
        teclas={teclas}
        setTeclas={setTeclas}
        palpites={palpites}
        setPalpites={setPalpites}
      />
      <Letras teclas={teclas} />
    </div>
  );
}

export default App;
