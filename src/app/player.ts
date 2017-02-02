import { Player } from './player.model';

export var player = new Player(
  "", //name
  1500, //milesToGoal
  150,  //daysRemaining
  1,    //speed
  1,    //healing
  1,    //gathering
  100,  //HP
  100,  //MaxHp
  300,  // crystals
  "", // gameOver boolean
  false, //monument check
  0, //monument 1 check
  ["Welcome to Haven. Please see the bottom-left window for a description of the game."], //output
);
