import { useEffect, useState } from "react";
import "./App.css";
import Image from "./Image";

const sarcastic = (input) => {
  return input
    .split("")
    .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
};

function App() {
  const [input, setInput] = useState("the spongebob meme is outdated");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const text = sarcastic(input);
    setOutput(text);
  }, [input]);

  return (
    <div className="App">
      <h1>SpongeoBob Sarcastic Text Generator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <Image></Image>
      <textarea value={output} readOnly={true}></textarea>
    </div>
  );
}

export default App;
