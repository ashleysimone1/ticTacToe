import React from 'react'
import './TicTacToe.css'
const circle = require('./o.png')
const cross = require() './x.png'

let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {

  let [count, setCount] = React.useState(0);
  let [lock, setLock] = React.useState(false);

  const handlePlayerToggler = (e, num) => {
    if(lock) {
      return 0;
    }

    if(count%2===0){
      e.target.innerHTML = `<img src= />`;
      data[num] = "cross";
      setCount(count++);
    }else{
      e.target.innerHTML = `<img src=${cross}/>`;
      data[num] = "circle";
      setCount(count++);
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
