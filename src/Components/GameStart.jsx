import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Square from './Square'
const initialPlayerInsquare=["","","","","","","","",""]
const GameStart = () => {
  const [playerState,setPlayerState]=useState(initialPlayerInsquare)
  const [move,setMove]=useState(0)
  const [winner,setWinner]=useState(null)
  useEffect(()=>{
    checkWinner(playerState)
  },[playerState])
 const onClickEvent=(event)=>{
 const playerStateCopy=[...playerState]
 if(!event.target.innerText)
 {
  playerStateCopy[event.target.id]=move%2===0?"X":"O"
  setPlayerState(playerStateCopy)
  setMove(move+1)
 }

 }
 const resetGame=()=>{
  setPlayerState(initialPlayerInsquare)
  setMove(0)
  setWinner(0)
 }
 const checkWinner=(playerState)=>{
   
   const conditionForWinning=
   [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
   ]
   conditionForWinning.forEach((condition)=>{
    const [x,y,z]=condition
    if(playerState[x] && playerState[x]===playerState[y] && playerState[x]===playerState[z])
    {
     setWinner(playerState[x])
     console.log("Winner is> ",playerState[x])
    }
   })
 }
  return (
    <>
    <div className="maincontainer" >
        <div className="leftsection">
          <h1>Let's Play</h1>
          <h2>The Game!</h2>
          
     <Link to={"/"} >Go Back Home</Link>

        </div>
        <div className="rightsection">
          {(!winner&&move!==9)&&(
            <div className="players">
            <div className={`player ${move %2 === 0 & "player-x"}`}>Player X</div>
            <div className={`player ${move %2 !==0  & "player-o"}`}>Player O</div>
          </div>
          )}
          
          {(!winner&&move!==9) && 
          (
            <div className="gameboard" onClick={onClickEvent}>
          <Square  id={0} className="border-right-bottom" state={playerState[0]} />
          <Square  id={1} className="border-right-bottom" state={playerState[1]}/>
          <Square  id={2} className="border-bottom" state={playerState[2]}/>
          <Square  id={3} className="border-right-bottom" state={playerState[3]}/>
          <Square  id={4} className="border-right-bottom" state={playerState[4]}/>
          <Square  id={5} className="border-bottom" state={playerState[5]}/>
          <Square  id={6} className="border-right" state={playerState[6]}/>
          <Square  id={7} className="border-right" state={playerState[7]}/>
          <Square  id={8} state={playerState[8]}/>
        </div>
          )
          }
          {
            (winner ||move===9) &&
              <div className="winner-board">
                <img src="https://freepngimg.com/thumb/winner/7-2-winner-png-file.png" alt="" / >
                  <h1>{
                    (move===9 && !winner)?`Its A Draw`:`Winner is Player ${winner}`
                    }</h1>
              </div>
            
          }
          
          <button onClick={resetGame}>Start New Game</button>
        </div>
    </div>
    </>
    
  )
}

export default GameStart