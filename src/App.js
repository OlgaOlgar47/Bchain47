import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="navbar__container">
            <ul className="nav-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
            </ul>
            <button className="connect-wallet-button">
              Connect <br /> wallet
            </button>
          </div>
        </nav>

        <h1 className="App-title">
          Образовательный проект <br /> Bchain47
        </h1>
        <div className="image-container">
          <p className="image-caption">Ваш первый блокчейн проект с нуля!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
