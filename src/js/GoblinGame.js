/**
 * @class GoblinGame
 */
export default class GoblinGame {
  /**
   *
   * @param {Class} board - игровое поле
   * @param {Class} character - игровой персонаж
   */
  constructor(board, character) {
    this.size = 4;
    this.board = board;
    this.character = character;
    this.characterMove = null;
  }

  /**
   * Инициация игры
   */
  init() {
    this.createUI();
    this.characterLogic();
  }

  /**
   * Создает игровое поле
   */
  createUI() {
    const board = this.board.getBoard(this.size);
    const body = document.querySelector('body');

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = GoblinGame.getContainerMarkUp();
    container.appendChild(board);

    body.insertBefore(container, body.firstChild);
  }

  /**
   * Добавляет разметку
   */
  static getContainerMarkUp() {
    return `
    <h1 class="title">Goblin Game</h1>
    `;
  }

  /**
   * Логика действий игрового персонажа
   */
  characterLogic() {
    const character = this.character.getCharacter();
    const cells = document.getElementsByClassName('cell');

    this.move = setInterval(() => {
      const freeCells = [...cells].filter((e) => !e.hasChildNodes());
      const index = Math.floor(Math.random() * freeCells.length);

      freeCells[index].appendChild(character);
    }, 1000);
  }

  /**
   * Останавливает перемещение игрового персонажа
   */
  characterStop() {
    clearInterval(this.move);
  }
}
