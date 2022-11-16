import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangManDrawing } from "./Components/HangManDrawing";
import { KeyBoard } from "./Components/KeyBoard";
import { HangManWord } from "./Components/HangManWord";
function App() {
  const [Character, SetCharacter] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessLetters, setGuessLetters] = useState<String[]>([]);
  console.log(Character);
  return (
    <div className="main">
      <div className="result">Lose Win</div>
      <HangManDrawing />
      <HangManWord />
      <KeyBoard />
    </div>
  );
}

export default App;
