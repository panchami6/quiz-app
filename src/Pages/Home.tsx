import "./home.css";
import { quizOne } from "../Data/quizData";
import { Link } from "react-router-dom";
import { useQuiz } from "../Context/quizContext";

export default function Home() {
  const { quizDispatch } = useQuiz();

  return (
    <div className="quizChoices">
      {quizOne.map((genre) => (
        <div className="choice">
          <h2>{genre.quizName}</h2>
          <Link to={`/${genre.quizName}`}>
            <button
              onClick={() =>
                quizDispatch({
                  type: "SET_CURRENT_QUIZ",
                  payload: genre.quizName
                })
              }
            >
              Start
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
