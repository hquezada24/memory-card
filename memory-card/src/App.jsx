import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  return (
    <>
      <Header score={score} />
      <Board score={score} setScore={setScore} />
      <Footer />
    </>
  );
}

export default App;
