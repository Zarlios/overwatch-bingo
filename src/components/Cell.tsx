import React from 'react';
import { Col } from 'react-bootstrap';
import BoardCell from './BoardCell';

export type CellClickHandler = (row: number, column: number) => void

export type CellProps = {
  row: number;
  column: number;
  image: string;
  name: string;
  onClick: CellClickHandler;
  enabled?: boolean;
  isFree?: boolean;
}

const Cell = ({ row, column, image, onClick, enabled, isFree, name }: CellProps) => (
  <BoardCell as={Col} onClick={() => onClick && onClick(row, column)} enabled={enabled}>
      {isFree ? <div>Free</div> : <img src={image} alt={name} />}
  </BoardCell>
);

export default Cell;
