import { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header data-tauri-drag-region className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello!</p>
        <p>
          <button type="button" onClick={() => appWindow.close()}>
            Quit
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
