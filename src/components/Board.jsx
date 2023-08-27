import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Cell from "./Cell";

import bingoData from "../assets/characters.json";

import "../style/board.css";

function Board() {
  const numRows = 5;
  const numCols = 5;

  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    const shuffledArray = [...bingoData];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    
    console.log("Shuffled data:", shuffledArray);
    
    setShuffledData(shuffledArray);
  
    console.log("Shuffled data set in state:", shuffledData);
  }, []);

  return (
    <div className="board">
      {Array.from({ length: numRows }, (_, rowIndex) => (
        <Row key={rowIndex}>
          {Array.from({ length: numCols }, (_, colIndex) => (
            <Cell key={colIndex} row={rowIndex} column={colIndex} data={shuffledData[rowIndex * numCols + colIndex]}/>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Board;
