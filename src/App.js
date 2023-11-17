import './App.css';
import Header from './Components/header';
import Inicio from "./Components/inicio";
import Mapa from "./Components/mapa";
import Rutas from "./Components/rutas";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/rutas" element={<Rutas />} />
        </Routes>
        </div>
      </Router>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
