import React from 'react'
import { BsBalloonHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { BsArrowDownCircleFill } from "react-icons/bs";
import tic from "../Resources/tic2.png"
const Home = () => {
  return (
     <>
     <main>
        <div className="enter">
            <h1>Tic Tac Teo</h1>
            <p>Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid.</p>
            <div className="image">
                <img src={tic} alt="" />
                <img src={tic} alt="" />
            </div>
            <div className="icon">
            <BsArrowDownCircleFill id='icon' />
            </div>
        <Link to={"/GameStart"}>Start Game</Link>
        </div>
        <h2>Made With <BsBalloonHeartFill/> By Awesh</h2>
     </main>
     </>
  )
}

export default Home