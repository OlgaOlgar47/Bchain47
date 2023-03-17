import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="button-connect-wallet">Подключить MetaMask</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ваш первый блокчейн проект с нуля!</p>
      </header>
    </div>
  );
}

export default App;
