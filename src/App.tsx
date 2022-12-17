import React from "react";
import PasswordGenerator from "./generator/PasswordGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Password Generator</h1>
      </header>
      <div>
        {" "}
        <p>Click Generator to return a password</p>
      </div>
      <PasswordGenerator />
    </div>
  );
}

export default App;
