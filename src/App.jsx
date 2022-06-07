import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import NewWine from './components/pages/NewWine';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <NewWine/>
    </div>
  );
}

export default App;
