import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AddWine from "./pages/AddWine";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [wineList, setWineList] = useState([]);
  const [filteredWhites, setFilteredWhites] = useState([]);
  const [filteredReds, setFilteredReds] = useState([]);
  const [mainDisplay, setMainDisplay] = useState("");

  const URL = `https://wine-app-group.herokuapp.com/`;

  useEffect(() => {
    const getWines = async () => {
      const data = await fetch(URL + "vineyard").then((response) =>
        response.json(),
      );
      setWineList(data);
    };
    getWines();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              wineList={wineList}
              setFilteredReds={setFilteredReds}
              setFilteredWhites={setFilteredWhites}
              filteredReds={filteredReds}
              filteredWhites={filteredWhites}
              setMainDisplay={setMainDisplay}
              mainDisplay={mainDisplay}
            />
          }
        />
        <Route path="/addwine" element={<AddWine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
