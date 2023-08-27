import Board from "./components/Board";
import "./App.css";
import React from "react";
import Header from "./components/Header";

function App() {
  const emptyGame = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  const X = "X";

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Board />

      </header>
    </div>
  );
}

export default App;
