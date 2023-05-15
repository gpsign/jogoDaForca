import palavras from "./palavras";
import { useState } from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo(props) {
  const {
    palavraSecreta,
    setPalavraSecreta,
    palavraUsuario,
    setPalavraUsuario,
    alfabeto,
    setTeclas,
    erros,
    setErros,
    palpites,
    setPalpites,
  } = props;

  const [estado, setEstado] = useState("");
  let errosAtuais = erros;
  let palpitesAtuais = [...palpites];
  let palavraAleatoria = palavras[Math.floor(Math.random() * 187)];
  let palavraUsuarioAtual = [...palavraUsuario];
  let acertos = 0;
  let fimDeJogo = false;

  function Botao(props) {
    if (props.ativo)
      return (
        <button
          key={props.letra}
          onClick={() => adivinhar(props.letra)}
          data-test="letter"
        >
          {props.letra.toUpperCase()}
        </button>
      );
    else
      return (
        <button key={props.letra} disabled data-test="letter">
          {props.letra.toUpperCase()}
        </button>
      );
  }

  function novoJogo() {
    palavraAleatoria = palavras[Math.floor(Math.random() * 187)];
    let aux = [];
    for (let i = 0; i < palavraAleatoria.length; i++) {
      aux.push(palavraAleatoria[i]);
    }
    palavraAleatoria = aux;
    setPalavraSecreta(palavraAleatoria);
    setErros(0);
    setPalpites([]);
    setEstado("");
    palpitesAtuais = [];
    errosAtuais = 0;
    aux = [];
    for (let i = 0; i < palavraAleatoria.length; i++) aux.push("_ ");
    palavraUsuarioAtual = aux;
    setPalavraUsuario(palavraUsuarioAtual);
    montarTeclado();
  }

  function adivinhar(letra) {
    if (!palavraAleatoria.includes(letra)) {
      errosAtuais++;
      setErros(errosAtuais);
    } else {
      acertos++;
      for (let i = 0; i < palavraAleatoria.length; i++) {
        if (palavraAleatoria[i] === letra) {
          palavraUsuarioAtual[i] = letra;
          setPalavraUsuario(palavraUsuarioAtual);
        }
      }
    }
    palpitesAtuais.push(letra);
    setPalpites(palpitesAtuais);
    verificarJogo();
    montarTeclado();
  }

  function montarTeclado() {
    let arrBotao = [];
    alfabeto.map((letra) => {
      arrBotao.push(
        <Botao
          ativo={!palpitesAtuais.includes(letra) && !fimDeJogo}
          letra={letra}
        />
      );
      setTeclas(arrBotao);
    });
  }

  function verificarJogo() {
    if (
      acertos === palavraAleatoria.length ||
      !palavraUsuarioAtual.includes("_ ")
    ) {
      setEstado("verde");
      fimDeJogo = true;
    } else if (errosAtuais >= 6) {
      setEstado("vermelho");
      fimDeJogo = true;
      setPalavraUsuario(palavraAleatoria);
    }
  }

  return (
    <div className="jogo">
      <img data-test="game-image" src={forca[errosAtuais]} />
      <button onClick={novoJogo} data-test="choose-word">
        Escolher Palavra
      </button>
      <h1 data-test="word" className={estado}>
        {palavraUsuarioAtual}
      </h1>
    </div>
  );
}
