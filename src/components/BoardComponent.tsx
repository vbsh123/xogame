import React, {useEffect, useState} from 'react';
import TileModel from '../model/Tile';
import TileComponent from './TileComponent';
import '../styling/board.css';

const Board = () => {
    const [tiles, setTiles] = useState([]);
    const [turn, setTurn] = useState(true);

    useEffect(()=> {
        let tiles = new Array<Array<TileModel>>();
        for(let j = 0; j < 3; j++){
            tiles[j] = new Array<TileModel>();
            for(let i = 0; i < 3; i++) {
                let tile = new TileModel();
                tiles[j].push(tile);           
            }
        }
        setTiles(tiles);
    }, [])

    return(
        <div className = "board">
            {tiles.map(tileRow => 
                <div>
                {tileRow.map(tile => 
                    <div><TileComponent tile = {tile} turn = {turn} setTurn = {setTurn}></TileComponent></div>
                )}
                <br></br>
                </div>
            )}
        </div>
    );
}
export default Board;