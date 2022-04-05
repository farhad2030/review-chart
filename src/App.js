import logo from "./logo.svg";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />
          <Home />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
