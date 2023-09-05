import styled from 'styled-components';

const BoardCell = styled.div<{ enabled: boolean }>`
  height: 7rem;
  width: 7rem;
  display: grid;
  cursor: 'pointer';
  background-color: ${({ enabled }) =>
    enabled ? 'lightblue' : 'rgb(125, 125, 125)'};
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;

  div {
    display: flex;
    justify-self: center;
    align-self: center;
    font-size: 2rem;
    color: black;
  }

  img {
    width: 7rem;
  }

  &.winner {
    background-color: rgb(177, 238, 175);
    color: rgb(171, 24, 24);
  }
`;

export default BoardCell;
