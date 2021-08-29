class TicTacToe {
    playerSymbol = 'x';
    currentPlayer = 'x';
    fieldGame = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    constructor() {
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex > 2 || columnIndex > 2) return;
        if (this.fieldGame[rowIndex][columnIndex]) return;
        this.fieldGame[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        return;
    }

    isFinished() {
        if (this.noMoreTurns()) return true;
        return (this.getWinner() === 'x' || this.getWinner() === 'o');
    }

    getWinner() {
        //win row
        for (let i=0; i<=2; i++) {
            const result = new Set(this.fieldGame[i]);
            if (this.isWinner(result)) return result.values().next().value;
        }
  
        //win col
        for (let i=0; i<=2; i++) {
            let result = new Set();
            for (let j=0; j<=2; j++) {
            result.add(this.fieldGame[j][i]);
            }
            if (this.isWinner(result)) return result.values().next().value;
        }
      
        //win diagonal 1
        let result = new Set();
        for (let i=0; i<=2; i++) {
            result.add(this.fieldGame[i][i]);
        }
        if (this.isWinner(result)) return result.values().next().value;
  
        //win diagonal 2
        result.clear();
        for (let i=0; i<=2; i++) {
            result.add(this.fieldGame[i][2-i]);
        }
        if (this.isWinner(result)) return result.values().next().value;
   
        return null;
    }

    noMoreTurns() {
        return !new Set(this.fieldGame.flat()).has(null);
    }

    isDraw() {
        return (this.noMoreTurns() && this.getWinner() === null) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.fieldGame[rowIndex][colIndex];
    }

    isWinner(result) {
        return (result.size === 1 && !result.has(null)) ? true : false;
    }
    
}

module.exports = TicTacToe;
