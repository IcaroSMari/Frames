import { useState } from "react";
import "./jokenpo.css";

const icone_pedra =
  "https://media.discordapp.net/attachments/1155608618322890762/1156595000705032212/image.png";
const icone_papel =
  "https://media.discordapp.net/attachments/1155608618322890762/1156595043843448883/image.png?ex=65158a92&is=65143912&hm=aa8ac6b6de0017265b3f112924b308591d7a800f898adb6cc3e3edbf6b2b5d2f&=";
const icone_tesoura =
  "https://media.discordapp.net/attachments/1155608618322890762/1156595092237332520/image.png?ex=65158a9e&is=6514391e&hm=3fb7c4faadd8f55e271a4bc3e5076c1c4664d0d5f91f14e79f2e262caa53e4ed&=";

function jokenpo() {
  const [jogadorJogada, setJogadaJogador] = useState("");
  const [maquinaJogada, setJogadaMaquina] = useState("");

  const possiveis_escolhar_do_computador = ["pedra", "papel", "tesoura"];

  //sorteio o que a maquina joga
  function sortearSelecaoComputador() {
    const num_escolha = Math.floor(
      Math.random() * possiveis_escolhar_do_computador.length
    );
    setJogadaMaquina(possiveis_escolhar_do_computador[num_escolha]);
  }

  // pessoa seleciona
  function jogadaSelecionada(selecionado) {
    if (selecionado == "pedra") {
      setJogadaJogador("pedra");
    } else if (selecionado == "papel") {
      setJogadaJogador("papel");
    } else {
      setJogadaJogador("tesoura");
    }
    sortearSelecaoComputador();
  }

  const [gameResult, setGameResult] = useState(
    "Inicie um jogo de pedra, papel ou teseoura!"
  );
  const [vitoriasMaquina, setVitoriasMaquina] = useState(0);
  const [vitoriasJogador, setVitoriasJogador] = useState(0);
  const [empates, setEmpates] = useState(0);

  function jogar() {
    if (jogadorJogada === maquinaJogada) 
    {
      setGameResult("EMPATE");
      setEmpates(empates + 1);
    } 
    else if (
      (jogadorJogada == "tesoura" && maquinaJogada == "pedra") ||
      (jogadorJogada == "pedra" && maquinaJogada == "papel") ||
      (jogadorJogada == "tesoura" && maquinaJogada == "pedra")
    ) {
      setGameResult("DERROTA");
      setVitoriasMaquina(vitoriasMaquina + 1);
    } else {
      setGameResult("VITÓRIA");
      setVitoriasJogador(vitoriasJogador + 1);
    }
  }

  return (
    <>
      <div id="holder_jokenpo">
        <h1>Jokenpô</h1>
                  <div id="jogar">
                    <div id="divJogador">
                      <h2>Jogador</h2>
                      <div id={jogadorJogada} className="jogadaSelecionada" />
                      <div className="imgs_escolhas">
                        <button
                          id="btnTesoura"
                          onClick={() => jogadaSelecionada("tesoura")}
                        >
                          <img src={icone_tesoura} alt="TISORA" />
                        </button>
                        <button id="btnPedra" onClick={() => jogadaSelecionada("pedra")}>
                          <img src={icone_pedra} alt="PREDA" />
                        </button>
                        <button id="btnPapel" onClick={() => jogadaSelecionada("papel")}>
                          <img src={icone_papel} alt="PAPEL" />
                        </button>
                      </div>
                    </div>
                    <button id="btn_jogar" onClick={() => jogar()}>
                      PLAY NOW!
                    </button>
                    <div id="divMaquina">
                      <h2>Máquina</h2>
                      <div id={maquinaJogada} className="jogada_escolhida" />
                      <div className="imgs_escolhas">
                        <a id="btn_jogar">
                          <img src={icone_tesoura} alt="TISORA" />
                        </a>
                        <a id="btn_jogar">
                          <img src={icone_pedra} alt="PREDA" />
                        </a>
                        <a id="btn_jogar">
                          <img src={icone_papel} alt="PAPEL" />
                        </a>
                      </div>
                    </div>
                  </div>
        <div id="divResults">
          <h1>{gameResult}</h1>
          <h2>
            {vitoriasJogador} X {vitoriasMaquina}
          </h2>
          <h2>Empates: {empates}</h2>
        </div>
      </div>
    </>
  );
}

export default jokenpo;
