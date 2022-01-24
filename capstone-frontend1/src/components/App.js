import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import  Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/Register">Register</Link> <Link to="/Login">Login</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/Register" element={<Register/>} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    
    </div>
  

  );
}

export default App;