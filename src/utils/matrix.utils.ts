import Tile from "../model/Tile"

export const checkMatrixVerticalWin = (board: Array<Array<Tile>>, rowLength: number): boolean => {
    let win = false;
    board.forEach(tileRow => {
        if (checkRowWin(tileRow, rowLength)) {
            win = true;
        }
    })

    return win;
}

const checkRowWin = (tileRow :Array<Tile>, rowLength: number): boolean => {
    let tileMatchNumber = 1;
    let firstTile = tileRow[0];
    tileRow.forEach((tile, index) => {
        if (index === 0) return;
        if (compareTiles(firstTile, tile)) {
            tileMatchNumber++;
        }
    })

    return tileMatchNumber === rowLength ? true : false;
} 

export const checkMatrixRowWin = (board: Array<Array<Tile>>, rowLength: number): boolean => {
    for (let i = 0; i < rowLength; i++) {
        const tileRow: Array<Tile> = makeTileRowHorizontally(board, i, rowLength);
        if (checkRowWin(tileRow, rowLength)) {
            return true;
        }
    }

    return false;
}

const makeTileRowHorizontally = (board: Array<Array<Tile>>, index2: number, rowLength: number): Array<Tile> => {
    let index1 = 0;
    let tileRow = new Array<Tile>();
    
    for (let i = 0; i < rowLength; i++) {
        const tile = board[index1][index2];
        tileRow.push(tile);
        index1++;
    }
    return tileRow;
}

export const checkMatrixDiagonalWin = (board: Array<Array<Tile>>, rowLength: number): boolean => {
    let startIndexes = [[0, 0],[0 , rowLength - 1]];
    
    return checkMatrixDiagonalWinFromLeft(board, rowLength, startIndexes[0]) ||
            checkMatrixDiagonalWinFromRight(board, rowLength, startIndexes[1]);
}

const checkMatrixDiagonalWinFromLeft = (board: Array<Array<Tile>>, rowLength: number, startIndexes: Array<number>): boolean => {
    let index1 = startIndexes[0] + 1;
    let index2 = startIndexes[1] + 1;
    let numberOfMatches = 1;
    let firstTile = board[index1 - 1][index2 - 1];
    for (let i = 1; i < rowLength; i++) {
        if (compareTiles(board[index1][index2], firstTile)) {
            numberOfMatches++;
        }
        index1++;
        index2++;
    }

    if (numberOfMatches === rowLength) {
        return true;
    }

    return false;
}

const checkMatrixDiagonalWinFromRight = (board: Array<Array<Tile>>, rowLength: number, startIndexes: Array<number>): boolean => {
    let index1 = startIndexes[0] + 1;
    let index2 = startIndexes[1] - 1;
    let numberOfMatches = 1;
    let firstTile = board[index1 - 1][index2 + 1];
    for (let i = 1; i < rowLength; i++) {
        if (compareTiles(board[index1][index2], firstTile)) {
            numberOfMatches++;
        }

        index1++;
        index2--;
    }

    if (numberOfMatches === rowLength) {
        return true;
    }

    return false;
}

const compareTiles = (Tile1: Tile, Tile2: Tile): boolean => {
    if (Tile1.getMarked() === Tile2.getMarked() && Tile1.getMarked() !== 0) {
        return true;
    }

    return false;
}