import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import AddWine from "./pages/AddWine";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";

function App() {
  const [wineList, setWineList] = useState([]);
  const [wine, setWine] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  const URL = "https://wine-app-group.herokuapp.com/";

  const getWine = async () => {
    const response = await fetch(URL + "vineyard").then((res) => res.json());
    setWineList(response);
  };

  const updateWine = async (wine, id) => {
    await fetch(URL + "wine/" + wine._id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(wine),
    });
    setWine(wine);
    getWine();
  };

  const addWine = async (newWine) => {
    await fetch(URL + "wine", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newWine),
    });
    setWine(newWine);
    getWine();
  };

  const handleDelete = async () => {
    if (wine) {
      const id = wine._id;
      await fetch(URL + "wine/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      }).catch((err) => console.log(err));
      getWine();
      setWine(null);
    }
  };

  useEffect(() => {
    getWine();
  }, []);

  return (
    <div id="container" className="App">
      <Header />
      <Routes>
        <Route path="/newwine" element={<AddWine addWine={addWine} />} />
        <Route
          path="/"
          element={
            <Home
              wineList={wineList}
              wine={wine}
              setWine={setWine}
              setFilteredList={setFilteredList}
              filteredList={filteredList}
              updateWine={updateWine}
              handleDelete={handleDelete}
              getWine={getWine}
              setWineList={setWineList}
            />
          }
        />
      </Routes>
      <div>{wine ? <Footer /> : <></>}</div>
    </div>
  );
}

export default App;
