import React, {useEffect, useState} from 'react';
import TileModel from '../model/Tile';
import TileComponent from './TileComponent';
import '../styling/board.css';
import { checkMatrixDiagonalWin, checkMatrixRowWin, checkMatrixVerticalWin } from '../utils/matrix.utils';

const Board = () => {
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
        setTiles(tiles);
    }, [])

    const checkWin = () => {
        if (checkMatrixDiagonalWin(tiles, rowLength) || 
                checkMatrixVerticalWin(tiles, rowLength) ||
                checkMatrixRowWin(tiles, rowLength) ) {
            
            alert("Someone won")

        }
    }

    return(
        <div className = "board">
            {tiles.map(tileRow => 
                <div>
                {tileRow.map(tile => 
                    <div><TileComponent tile = {tile} turn = {turn} setTurn = {setTurn} winCheck = {checkWin}></TileComponent></div>
                )}
                <br></br>
                </div>
            )}
        </div>
    );
}
export default Board;