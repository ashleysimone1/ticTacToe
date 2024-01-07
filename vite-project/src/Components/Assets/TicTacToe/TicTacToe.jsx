import React from 'react'
import './TicTacToe.css'
import circle from '../../Assets/TicTacToe/o.png'
import cross from '../../Assets/TicTacToe/x.png'

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {

  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);

  const handlePlayerToggler = (e, num) => {

    if(count%2===0){
      e.target.innerHTML = `<h1>X</h1>`;
      data[num] = "x";
      setCount(count++);
    }else if(count%2===1){
      e.target.innerHTML = `<h1>O</h1>`;
      data[num] = "o";
      setCount(count++);
    }
  }

  const checkWinner = () => {
    if(data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      return true;
    }else if(data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      return true;
    }else if(data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      return true;
    }else if(data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      return true;
    }else if(data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      return true;
    }else if(data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      return true;
    }else if(data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      return true;
    }else if(data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      return true;
    }
  }

  return (
    <div className = 'container'>
        <h1 className="title">Tic Tac Toe Game In <span>React.js</span></h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 0)}></div>
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 1)}></div>
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 2)}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 3)}></div>
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 4)}></div>
                <div className="boxes" onClick={(e) =>handlePlayerToggler(e, 5)}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 6)}></div>
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 7)}></div>
                <div className="boxes" onClick={(e) => handlePlayerToggler(e, 8)}></div>
            </div>
        </div>
        <button className='reset'>Reset</button>
    </div>
  )
}
