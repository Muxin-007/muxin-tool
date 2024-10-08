import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Button from "antd/es/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <h1>Welcome to Muxin-Tool</h1>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="primary" onClick={greet}>Greet</Button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
