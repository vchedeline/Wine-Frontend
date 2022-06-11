import { useEffect } from "react";
import { useState } from "react";
import Panel from "./components/Panel";
import MainDisplay from "./components/MainDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import AddWine from "./pages/AddWine";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";


function App() {
  const [wineList, setWineList] = useState([]);
  const [wine, setWine] = useState(null);
  const [filteredList, setFilteredList] = useState(null)
  // let wine;

  const URL = "https://wine-app-group.herokuapp.com/";
  // const getWineName = (name) => {
  //   wine = wineList.filter((e) => e === name);
  // };

  const getWine = async () => {
    const response = await fetch(URL + "vineyard").then((res) => res.json());
    setWineList(response);
  };

  const updateWine = async (wine, id) => {
    await fetch(URL + 'wine/' + wine._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(wine)
    })
    getWine()
  }

  const addWine = async (newWine) => {
    await fetch(URL + "wine/", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newWine),
    });
    getWine();
  };

  useEffect(() => {
    getWine();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
            path="/wine"
            element={<AddWine wineList={wineList} addWine={addWine} />}
          />
        <Route path="/" element={
          <Home
            URL ={URL}
            getWine={getWine}
            wineList={wineList}
            wine={wine}
            setWine={setWine}
            setFilteredList={setFilteredList}
          />
        }
      />      
      </Routes>        
      <Footer />
    </div>
  );
}

export default App;
