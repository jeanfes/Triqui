import { WinnerCombos } from '../constant.js';

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WinnerCombos) {
        const [a, b, c] = combo
        if (boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c]) {
            return boardToCheck[a];
        }
    }
    return null;
}