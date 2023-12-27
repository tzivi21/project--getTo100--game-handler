import React from 'react'

function MathOperations(props) {

    function decrease() {
        props.setSteps((s) => s + 1);
        props.setRandNum((n) => n - 1);
        if (props.randNum != 101) {
            props.setPlayersTurn((turn) => {
                if (turn == props.players.length - 1) {
                    return 0;
                }
                return turn + 1;
            })
        }

    }
    function increase() {
        props.setSteps((s) => s + 1);

        props.setRandNum((n) => n + 1);
        if (props.randNum != 99) {
            props.setPlayersTurn((turn) => {
                if (turn == props.players.length - 1) {
                    return 0;
                }
                return turn + 1;
            })
        }

    }
    function double() {
        props.setSteps((s) => s + 1);

        props.setRandNum((n) => n * 2);
        if (props.randNum != 50) {
            props.setPlayersTurn((turn) => {
                if (turn == props.players.length - 1) {
                    return 0;
                }
                return turn + 1;
            })
        }
    }
    function divide() {
        props.setSteps((s) => s + 1);

        props.setRandNum((n) => Math.floor(n / 2));
        if (props.randNum != 200) {
            props.setPlayersTurn((turn) => {
                if (turn == props.players.length - 1) {
                    return 0;
                }
                return turn + 1;
            })
        }
    }

    return (
        <div>
            <button disabled={props.players[props.playersTurn].email == props.currentEmail && props.startGame && !props.winner ? false : true} onClick={() => { decrease() }}>-1</button>
            <button disabled={props.players[props.playersTurn].email == props.currentEmail && props.startGame && !props.winner ? false : true} onClick={() => { increase() }}>+1</button>
            <button disabled={props.players[props.playersTurn].email == props.currentEmail && props.startGame && !props.winner ? false : true} onClick={() => { double() }}>*2</button>
            <button disabled={props.players[props.playersTurn].email == props.currentEmail && props.startGame && !props.winner ? false : true} onClick={() => { divide() }}>/2</button>

        </div>
    )
}

export default MathOperations
