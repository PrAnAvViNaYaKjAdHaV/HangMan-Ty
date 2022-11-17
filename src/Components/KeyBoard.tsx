import { useEffect } from "react";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export function KeyBoard() {
  useEffect(() => {
    const keyDownHandler = (event: { key: String }) => {
      console.log("key", event.key);
    };
    document.addEventListener("keydown", keyDownHandler);
  });
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        fontSize: "2rem",
        justifyContent: "center",
        maxWidth: "100vw",
      }}
    >
      {alphabet.map((letter, index) => (
        <span
          key={index}
          style={{
            background: "grey",
            padding: "1rem 2rem",
          }}
          onClick={(e) => {
            console.log((e.target as HTMLElement).textContent);
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
