import './App.css';
import {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import AddWine from './pages/AddWine';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [wineList, setWineList] = useState("")

  const URL = `https://wine-app-group.herokuapp.com/`


  const getWines = async () => {
    const data = await fetch(URL + "vineyard").then((response) => response.json())
    setWineList(data)
  }

  useEffect(() => {
    getWines()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home wineList={wineList}/>} />
        <Route path="/addwine" element={<AddWine/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
