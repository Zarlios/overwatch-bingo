import React from 'react';
import styled from 'styled-components';
import { emptyGame } from 'app/constants';
import { shuffleData, createBoard } from 'app/helpers';
import BoardRow from './BoardRow';

import characterArray from '../assets/characters.json';

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

const bingoBoard = createBoard(shuffleData(characterArray));

const Board = () => {
  const [boardState, setBoardState] = React.useState(emptyGame);

  const handleCellClick = (row: number, column: number) => {
    setBoardState((previousBoard) => {
      const previousValue = previousBoard[row][column];
      previousBoard[row][column] = previousValue === '' ? X : '';
      return previousBoard;
    });

    console.log(boardState); // eslint-disable-line
  };

  return (
    <BoardStyle>
      {bingoBoard.map((row, rowIndex) => (
        <BoardRow
          key={`row-${rowIndex}`} // eslint-disable-line react/no-array-index-key
          row={row}
          rowIndex={rowIndex}
          onCellClick={handleCellClick}
          boardState={boardState}
        />
      ))}
    </BoardStyle>
  );
};

export default Board;
