import { Routes, Route } from "react-router-dom";
import './App.css';
import { ListaPaises } from "./components/ListadePaises";
import countries from "./countries.json";
import { Navbar } from "./components/Navbar";
import { Detalhes } from "./components/Detalhes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <ListaPaises countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<Detalhes countries={countries} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;