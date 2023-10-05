export const updateBoard = (index) => {
    if (board[index] || winner) {
        return;
    }
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn == Turnos.x ? Turnos.o : Turnos.x;
    setTurn(newTurn);
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
        confetti();
        setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
        setWinner(false);
    }
}