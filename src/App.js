import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("the spongebob meme is outdated");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const text = input
      .split("")
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("");
    setOutput(text);
  }, [input]);

  return (
    <div className="App">
      <h1>SpongeoBob Sarcastic Text Generator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <img
        class="canvas"
        src="https://cdn.mobilesyrup.com/wp-content/uploads/2019/01/mocking-spongebob.jpg"
        alt="spongebob meme"
      />
      <textarea value={output}></textarea>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
