import { Player } from './player.model';

export var player = new Player(
  "", //name
  1000, //milesToGoal
  150,  //daysRemaining
  1,    //speed
  1,    //healing
  1,    //gathering
  100,  //HP
  100,  //MaxHp
  300,  // crystals
  "", // gameOver boolean
  false, //monument check
  false, //monument 1 check
  false, //monument 2 check
  false, //monument 3 check
  false, //monument 4 check
  ["Welcome to Haven. Please see the bottom-left window for a description of the game."], //output
);
