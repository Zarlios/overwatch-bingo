/* eslint-disable */

export const emptyGame = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

export const shuffledData = (unshuffledData: CellDetails[]) => {
  const shuffledData = [...unshuffledData];
  for (let i = unshuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData;
};
