export default class GoblinGame {
  constructor(board, character) {
    this.size = 4;
    this.board = board;
    this.character = character;
  }

  createUI() {
    const container = document.createElement('div');
    container.classList.add('container');
    const board = this.board.getBoard(this.size);
    const body = document.querySelector('body');
    container.innerHTML = GoblinGame.getContainerMarkUp();
    container.appendChild(board);
    body.insertBefore(container, body.firstChild);
  }

  static getContainerMarkUp() {
    return `
    <h1 class="title">Goblin Game</h1>
    `;
  }

  characterLogic() {
    const character = this.character.getCharacter();
    const cells = document.getElementsByClassName('cell');
    setInterval(() => {
      let index;
      let indexHasChild;
      do {
        indexHasChild = [...cells].findIndex((e) => e.hasChildNodes());
        index = Math.floor(Math.random() * cells.length);
      } while (index === indexHasChild);
      cells[index].appendChild(character);
    }, 1000);
  }
}
