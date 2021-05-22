import "./styles.css";
import { Routes, Route } from "react-router-dom";
import PlayQuiz from "./Pages/PlayQuiz";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:quizName" element={<PlayQuiz />} />
      </Routes>
    </div>
  );
}
