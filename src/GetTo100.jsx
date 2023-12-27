import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './GetTo100.css'
import Player from './assets/components/Player'
import LogIn from './assets/components/LogIn'
import SignUp from './assets/components/SignUp'
let sortedPlayersArray=[];
function GetTo100() {
  const [players, setPlayers] = useState([]);
  const [flagLogIn, setFlagLogIn] = useState(false);
  const [flagSignUp, setFlagSignUp] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [playersTurn, setPlayersTurn] = useState(0);
  let tempPlayers=players.map((a)=>a);
  sortedPlayersArray=tempPlayers.sort((a, b) => a.average - b.average);
  

  function openLogin() {
    setFlagLogIn(true);
    setFlagSignUp(false);
  }

  function openSignUp() {
    setFlagSignUp(true);
    setFlagLogIn(false);
  }
  function handleStartGame() {
    
    setStartGame(true);
  }

  return (
    <>
      <div className='container'>

        {!startGame && <button onClick={openLogin}>Log In</button>}
        {!startGame && <button onClick={openSignUp}>Sign Up</button>}
        {players.length >= 1 && !startGame && <button onClick={handleStartGame}>Play</button>}
        <div className='formsContainer'>
          {!startGame && flagLogIn && <LogIn setFlagLogIn={setFlagLogIn} players={players} setPlayers={setPlayers} />}
          {!startGame && flagSignUp && <SignUp setFlagSignUp={setFlagSignUp} players={players} setPlayers={setPlayers} />}
        </div>
        {startGame&&<p className='topPlayers'>Top players: 🥇 {sortedPlayersArray.length>0&&sortedPlayersArray[0].average!=null&&sortedPlayersArray[0].userName} 🥈 {sortedPlayersArray.length>1&&sortedPlayersArray[1].average!=null&&sortedPlayersArray[1].userName} 🥉 {sortedPlayersArray.length>2&&sortedPlayersArray[2].average!=null&&sortedPlayersArray[2].userName}</p>}

      </div>
      <h1 className='title'>Get To 100</h1>

      <div className='players'>
        {players.map((p) => {
          return <Player
            setPlayersTurn={setPlayersTurn}
            playersTurn={playersTurn}
            key={p.email}
            currentPlayer={p}
            startGame={startGame}
            setStartGame={setStartGame}
            setPlayers={setPlayers}
            players={players} />
        })}
      </div>
    </>
  )
}

export default GetTo100
