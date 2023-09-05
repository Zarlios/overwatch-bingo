import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import { emptyGame } from 'app/constants';
import Cell from './Cell';


type BoardProps = {
  rowCount: number;
  columnCount: number;
  boardCells: CellDetails[];
};

const BoardStyle = styled.div`
  background-color: white;
  width: 100%;
  max-width: 41rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 25px;
`;

const X = 'X';

const Board = ({ rowCount = 5, columnCount = 5, boardCells }: BoardProps) => {
 
  const handleShuffle (shuffledArray)
  // Fisher-Yates Shuffle Algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }




  const [boardGame, setBoardGame] = React.useState(emptyGame);
  const cells = React.useMemo(() => boardCells.map(cell => {...cell, enabled: boardGame[]}), [boardGame]);
  

  // const boardRows = cells[][]
  // map over boardRows
  // within each row map over cells/items

  const handleCellClick = (row: number, column: number) => {
    setBoardGame(previousBoard => {
      const previousValue = previousBoard[row][column];
      previousBoard[row][column] = previousValue === '' ?  X : '';
      return previousBoard;
    });

    [].map

    console.log(boardGame); // eslint-disable-line
  };

  return (
    <BoardStyle>
      {boardGame.map((row, rowIndex, arr) => {
        return (
        <Row>
          {row.map((col, colIndx) => 
            <Cell
              key={colIndex}
              row={rowIndex}
              column={colIndex}
              image={cells[rowIndex * columnCount + colIndex].image}
              onClick={handleCellClick}
              name={cells[rowIndex * columnCount + colIndex].name}
              enabled={boardGame[rowIndex][colIndex] === ''}
            />
          })}
        </Row>
        )
      })}      
    </BoardStyle>
  );
};

export default Board;
