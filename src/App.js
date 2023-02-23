import './App.css';
import React from "react";
import Mountain from './components/mountain';
import Birds from './components/birds';
import Beaches from './components/beaches';
import Food from './components/food';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1><i>SnapShot</i></h1>
      <hr />
      <div id="tag">
        <section id="bar">
        <Link to="/mountain"><p>Mountain</p></Link>
        <Link to='/birds'><p>Birds</p> </Link>
        <Link to='/beaches'><p>Beaches</p></Link>
        <Link to='/food'><p>Food</p></Link>
        </section>
        <Routes>
          <Route path='/mountain' element={<Mountain/>}></Route>
          <Route path='/birds' element={<Birds/>}></Route>
          <Route path='/beaches' element={<Beaches/>}></Route>
          <Route path='/food' element={<Food/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
