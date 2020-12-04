export default class Character {
  constructor() {
    this.character = null;
  }

  createCharacter() {
    const character = document.createElement('div');
    character.classList.add('character');

    this.character = character;
  }

  getCharacter() {
    this.createCharacter();
    return this.character;
  }
}
