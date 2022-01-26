import { useEffect, useState } from "react";
import "./App.css";
import Image from "./Image";

const getAlternatingText = (input) => {
  return input
    .split("")
    .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
    .join("");
};

function App() {
  const [input, setInput] = useState("the spongebob meme is outdated");
  const [output, setOutput] = useState("");

  const placeholder = "the spongebob meme is outdated";
  useEffect(() => {
    const alternatingText = getAlternatingText(input);
    const returnText = alternatingText;
    setOutput(returnText);
  }, [input]);

  return (
    <div className="App">
      <div className="text">
        <h1>SpongeoBob Sarcastic Text Generator</h1>
        <textarea
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <textarea
          placeholder={getAlternatingText(placeholder)}
          value={output}
          readOnly={true}
        ></textarea>
      </div>
      <Image></Image>
    </div>
  );
}

export default App;
