import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  constructor() { }

  newPlayer = new Player(
    "", //name
    1000, //milesToGoal
    150,  //daysRemaining
    1,    //speed
    1,    //healing
    1,    //gathering
    100,  //HP
    300,  // crystals
  );


  changeName = function(inputtedName) {
    this.newPlayer.name = inputtedName;
  };

  decreaseMilesToGoal = function(amount) {
    this.newPlayer.milesToGoal -= amount;
  };

  increaseMilesToGoal = function(amount) {
    this.newPlayer.milesToGoal += amount;
  };

  decreaseDaysRemaining(amount) {
    this.newPlayer.daysRemaining -= amount;
  };

  increaseDaysRemaining(amount) {
    this.newPlayer.daysRemaining += amount;
  };

  decreaseHp(amount) {
    this.newPlayer.hp -= amount;
  };

  increaseHp(amount) {
    this.newPlayer.hp += amount;
  };

  decreaseCrystals(amount) {
    this.newPlayer.crystals -= amount;
  };

  increaseCrystals(amount) {
    this.newPlayer.crystals += amount;
  };
  resetHp() {
    this.newPlayer.hp = 100;
  };
}
