import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

import Quiz from "../img/quiz.svg";


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div id="welcome">
      <p>Clique no botão abaixo para começar:</p>
      <button id="start" onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
