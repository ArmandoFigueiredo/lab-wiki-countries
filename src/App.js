import { Routes, Route } from "react-router-dom";
import './App.css';
import { CountriesList } from "./components/CountriesList";
import countries from "./countries.json";
import { Navbar } from "./components/Navbar";
import { CountryDetails } from "./components/CountryDetails";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container">
        <div class="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;