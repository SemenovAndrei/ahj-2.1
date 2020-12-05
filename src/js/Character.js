/**
 * @class Character
 */
export default class Character {
  constructor() {
    this.character = null;
  }

  /**
   * Создает игрового персонажа
   */
  createCharacter() {
    const character = document.createElement('div');
    character.classList.add('character');

    this.character = character;
  }

  /**
   * @returns character
   */
  getCharacter() {
    this.createCharacter();
    return this.character;
  }
}
