import { render } from "react-dom";
import { QuizProvider } from "./Context/quizContext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Router>
    <QuizProvider>
      <App />
    </QuizProvider>
  </Router>,
  rootElement
);
