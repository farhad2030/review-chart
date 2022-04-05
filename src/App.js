import logo from "./logo.svg";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
