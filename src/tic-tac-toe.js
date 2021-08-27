class TicTacToe {
    constructor() {
        this.playerSymbol = '';
    }

    getCurrentPlayerSymbol() {
        if (this.playerSymbol === '') {
            this.playerSymbol = 'x';
        }
        if (this.playerSymbol = 'x') {
            this.playerSymbol = 'o';
        } else {
            this.playerSymbol = 'o';
        }
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;
