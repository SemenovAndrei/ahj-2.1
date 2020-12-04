import Board from './Board';
import Character from './Character';
import GoblinGame from './GoblinGame';

const worked = 'it works!';

export default worked;

console.log(worked);

const board = new Board();
const character = new Character();
const goblinGame = new GoblinGame(board, character);
goblinGame.createUI();
console.log(goblinGame.characterLogic());
