import { Player } from './player.model';

export var player = new Player(
  "", //name
  1000, //milesToGoal
  150,  //daysRemaining
  20,    //speed
  20,    //healing
  20,    //gathering
  999,  //HP
  100,  //MaxHp
  300,  // crystals
  true, // gameOver boolean
  false, //monument check
  false, //monument 1 check
  false, //monument 2 check
  false, //monument 3 check
  false, //monument 4 check
  ["Welcome to Haven"], //output
);
