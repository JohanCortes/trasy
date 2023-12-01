import './App.css';
import Control from './Components/control';
import Footer from './Components/footer';
import Header from './Components/header';
import Inicio from "./Components/inicio";
import Mapa from "./Components/mapa";
import Rutas from "./Components/rutas";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [instructions, setInstructions] = useState(null);

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/mapa" element={<Mapa setInstructions={setInstructions}/>} />
            <Route path="/rutas" element={instructions ? <Rutas instructions={instructions}/> : <Control/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
