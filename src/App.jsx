import { useState } from 'react';
import confetti from "canvas-confetti";
import { Square } from './components/Square.jsx';
import { Turnos } from "./constant.js";
import { checkWinnerFrom } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turnos.x);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turnos.x);
    setWinner(null);
  }
 
  const checkEndGame = (newBoard) => {
    return newBoard.every((Square)=> Square != null);
  }

  const updateBoard = (index) =>{
    if ( board[index] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn == Turnos.x? Turnos.o : Turnos.x;
    setTurn(newTurn);
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }
  
  return (
    <>
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <footer>
        <button onClick={resetGame}>Start again</button>
      </footer>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}>
                  {board[index]}
                </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === Turnos.x}>{Turnos.x}</Square>
        <Square isSelected={turn === Turnos.o}>{Turnos.o}</Square>
      </section>
      <WinnerModal 
        winner={winner} 
        resetGame={resetGame}></WinnerModal>
    
    </main>
    </>
  )
}

export default App
