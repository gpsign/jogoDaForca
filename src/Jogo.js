import palavras from "./Palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
let forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo(props) {
  return (
    <div className="jogo">
      <img src={forca[props.erros]} />
      <button
        onClick={() => {
          let indexAleatorio = Math.floor(Math.random() * 199);
          props.setPalavraSecreta(palavras[indexAleatorio]);
          let aux = [];
          for (let i = 0; i < palavras[indexAleatorio].length; i++) {
            aux.push("_");
          }
          props.setPalavraUsuario(aux.join(" "));

          props.setTeclas(
            props.alfabeto.map((letra) => <button>{letra.toUpperCase()}</button>)
          );
        }}
      >
        Escolher Palavra
      </button>
      <h1>{props.palavraUsuario}</h1>
    </div>
  );
}
