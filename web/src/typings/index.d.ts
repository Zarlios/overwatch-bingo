declare global {
  type BingoCard = {
    id: number;
    name: string;
    image: string;
  };

  type BoardOptions = {
    rows: number;
    columns: number;
  }
}

export {};
