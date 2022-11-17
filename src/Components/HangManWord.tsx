export function HangManWord() {
  const word = "test";
  const guessLetters = ["e", "t", "s"];
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
          }}
        >
          <span
            style={{
              visibility: guessLetters.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
