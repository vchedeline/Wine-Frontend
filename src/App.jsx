import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AddWine from "./pages/AddWine";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainDisplay from "./components/MainDisplay";

function App() {
  const [wineList, setWineList] = useState([]);
  const [filteredWhites, setFilteredWhites] = useState([]);
  const [filteredReds, setFilteredReds] = useState([]);

  const URL = `https://wine-app-group.herokuapp.com/`;

  const getWines = async () => {
    const data = await fetch(URL + "vineyard").then((response) =>
      response.json(),
    );
    setWineList(data);
  };

  useEffect(() => {
    getWines();
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              wineList={wineList}
              setFilteredReds={setFilteredReds}
              setFilteredWhites={setFilteredWhites}
            />
          }
        />
        <Route
          path="/wines/reds"
          element={
            <MainDisplay wineList={wineList} filteredReds={filteredReds} />
          }
        />
        <Route
          path="/wines/whites"
          element={
            <MainDisplay wineList={wineList} filteredWhites={filteredWhites} />
          }
        />
        <Route path="/addwine" element={<AddWine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
