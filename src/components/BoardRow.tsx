import React from 'react';
import { Row } from 'react-bootstrap';
import Cell from './Cell';

type BoardRowProps = {
  row: BingoCard[];
  rowIndex: number;
  onCellClick: (row: number, column: number) => void;
  boardState: string[][];
};

const BoardRow = ({
  row,
  rowIndex,
  onCellClick,
  boardState,
}: BoardRowProps) => (
  <Row>
    {row.map((cell, colIndex) => (
      <Cell
        key={`column-${colIndex}`} // eslint-disable-line react/no-array-index-key
        row={rowIndex}
        column={colIndex}
        image={cell.image}
        onClick={onCellClick}
        name={cell.name}
        enabled={boardState[rowIndex][colIndex] === ''}
      />
    ))}
  </Row>
);

export default BoardRow;
