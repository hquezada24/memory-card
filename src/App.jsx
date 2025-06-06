import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Board score={score} setScore={setScore} setBestScore={setBestScore} />
      <Footer />
    </>
  );
}

export default App;
