import './App.css';
import {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import AddWine from './pages/AddWine';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addwine" element={<AddWine/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
