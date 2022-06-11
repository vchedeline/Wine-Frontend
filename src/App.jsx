import { useEffect } from "react";
import { useState } from "react";
import Panel from "./components/Panel";
import MainDisplay from "./components/MainDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import AddWine from "./pages/AddWine";
import Home from "./pages/Home";


function App() {
  const [wineList, setWineList] = useState([]);
  const [wine, setWine] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  // let wine;

  const URL = "https://wine-app-group.herokuapp.com/";
  // const getWineName = (name) => {
  //   wine = wineList.filter((e) => e === name);
  // };

  const getWine = async () => {
    const response = await fetch(URL + "vineyard").then((res) => res.json());
    setWineList(response);
  };

  const addWine = async (newWine) => {
    await fetch(URL + "wine", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newWine),
    });
  };

  useEffect(() => {
    getWine();
  }, []);

  return (
    <div className="App">
      <Header />
      <Home wineList={wineList} wine={wine} setWine={setWine} setFilteredList={setFilteredList}/>
      <Footer />
    </div>
  );
}

export default App;
