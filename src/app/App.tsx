import React from 'react';
import Board from 'components/Board';
import { shuffledData } from './constants';
import bingoData from 'assets/characters.json';

const App = () => {
  const cells = shuffledData(bingoData);
  return (
    <div className='App container-app'>
      <Board rowCount={5} columnCount={5} boardCells={cells} />
    </div>
  );
};

export default App;
