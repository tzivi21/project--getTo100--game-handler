import React from 'react'
import MathOperations from './MathOperations';
import { useState } from 'react';
import styles from './Player.module.css'


function Player(props) {

  const [randNum, setRandNum] = useState(50);
  const [steps, setSteps] = useState(0);
  const [winner, setWinner] = useState(false);

  function handleLogOut() {
    if (props.currentPlayer.email == props.players[props.players.length - 1].email) {
      props.setPlayersTurn(0);
    }
    const filteredArray = props.players.filter((p) => p.email != props.currentPlayer.email);
    props.setPlayers(filteredArray);
    setWinner(false);
    if (props.players.length == 1) {
      props.setStartGame(false);
    }
  }
  if (randNum == 100) {
    win();
  }
  function win() {

    setWinner(true);
    setRandNum(0);
    let updatedPlayer = props.players.map((p) => {
      if (p.email == props.currentPlayer.email) {
        p.scores.push(steps);
        let average = 0;
        props.currentPlayer.scores.forEach(score => {
          average += score;
        });
        average /= props.currentPlayer.scores.length;
        props.currentPlayer.average = average;
        let player = JSON.parse(localStorage.getItem(props.currentPlayer.email));
        player.scores.push(steps);
        player.average = average;
        localStorage.setItem(props.currentPlayer.email, JSON.stringify(player));

      }
      return p;
    })
    setSteps(0);
    props.setPlayers(updatedPlayer);
  }
  function handleNewRand() {
    setRandNum(Math.floor(Math.random() * 100));
    setWinner(false);
  }
  return (
    <div className={(props.players[props.playersTurn].email == props.currentPlayer.email && props.startGame) ? styles.myTurn : styles.container} >
      <h3>{props.currentPlayer.userName}</h3>
      {winner && <h4 className={styles.winner}>You Won!!🏆</h4>}
      <p className={styles.number}>number:{randNum}</p>
      <p>steps: {steps}</p>
      <MathOperations setPlayersTurn={props.setPlayersTurn}
        startGame={props.startGame}
        players={props.players}
        currentEmail={props.currentPlayer.email}
        playersTurn={props.playersTurn}
        scores={props.currentPlayer.scores}
        steps={steps}
        setSteps={setSteps}
        randNum={randNum}
        setRandNum={setRandNum}
        winner={winner} />
      <p>your scores:
        {props.currentPlayer.scores.map((score, i) => {
          return <span key={i}>{score} </span>
        })}
      </p>
      {(!props.startGame || winner) && <button onClick={handleLogOut}>Log Out</button>}
      {winner && <button onClick={handleNewRand}>rand a new number</button>}
    </div>
  )
}

export default Player
