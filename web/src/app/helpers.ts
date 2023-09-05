export const shuffleData = <T>(unshuffledData: T[]) => {
  const shuffled = [...unshuffledData];
  for (let i = unshuffledData.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const createBoard = (
  bingoCards: BingoCard[],
  boardOptions: BoardOptions = { rows: 5, columns: 5 }
) => {
  const bingoBoard: BingoCard[][] = [];
  let index = 0;

  for (let row = 0; row < boardOptions.rows; row += 1) {
    const newRow: BingoCard[] = [];

    for (let col = 0; col < boardOptions.columns; col += 1) {
      newRow.push(bingoCards[index]);
      index += 1;
    }

    bingoBoard.push(newRow);
  }

  return bingoBoard;
};
