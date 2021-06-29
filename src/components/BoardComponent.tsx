import React, {useEffect, useState} from 'react';
import WonPrompt from './winning/WonComponent';
import TileModel from '../model/Tile';
import TileComponent from './TileComponent';
import '../styling/board.css';
import { checkMatrixDiagonalWin, checkMatrixRowWin, checkMatrixVerticalWin } from '../utils/matrix.utils';

const Board = () => {
    const [isWon, setIsWon] = useState(false);
    const [newGame, setNewGame] = useState(false); 
    const [tiles, setTiles] = useState([]);
    const [turn, setTurn] = useState(1);
    const rowLength = 3;

    useEffect(()=> {
        let tiles = new Array<Array<TileModel>>();
        for(let j = 0; j < rowLength; j++){
            tiles[j] = new Array<TileModel>();
            for(let i = 0; i < rowLength; i++) {
                let tile = new TileModel();
                tiles[j].push(tile);     
            }
        }
        setTurn(1);
        setTiles(tiles);
        setNewGame(false);
        setIsWon(false);
    }, [newGame])

    const checkWin = () => {
        if (checkMatrixDiagonalWin(tiles, rowLength) || 
                checkMatrixVerticalWin(tiles, rowLength) ||
                checkMatrixRowWin(tiles, rowLength) ) {
            setIsWon(true);
        }
    }

    return(
        <div className = "board">
            {tiles.map(tileRow => 
                <div className = "tileRow">
                {tileRow.map(tile => 
                   <TileComponent tile = {tile} turn = {turn} setTurn = {setTurn} winCheck = {checkWin}></TileComponent>
                )}
                <br></br>
                </div>
            )}
        {isWon ? <WonPrompt setNewGame = {setNewGame} /> : null}
        </div>

        
    );
}
export default Board;