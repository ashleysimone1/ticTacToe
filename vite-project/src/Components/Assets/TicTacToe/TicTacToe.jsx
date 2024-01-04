import React from 'react'
import './TicTacToe.css'
import circle from './o.png'
import cross from './x.png'


export const TicTacToe = () => {
  return (
    <div className = 'container'>
        <h1 className="title">Tic Tac Toe Game In <span>React.js</span></h1>
        <div className="board">

        </div>
        <button className='reset'>Reset</button>
    </div>
  )
}
