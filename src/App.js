import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import GameStart from "./Components/GameStart";
import Home from "./Components/Home";

 
import "./Styles/App.scss"
import "./Styles/Home.scss"
import "./Styles/GameStart.scss"
import "./Styles/Square.scss"
import "./Styles/MediaQuery.scss"
function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/GameStart" element={<GameStart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
