export default class Board {
  constructor() {
    this.board = null;
  }

  createBoard(number) {
    if (typeof number !== 'number') {
      throw new Error('значение должно быть числом');
    }
    const board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i < Math.trunc(number); i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }

    this.board = board;
  }

  getBoard(number) {
    this.createBoard(number);
    return this.board;
  }
}
