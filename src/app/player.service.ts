import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { player } from './player'

@Injectable()
export class PlayerService {
  constructor() { }

  getPlayer = function() {
    return player;
  }

  changeName = function(inputtedName) {
    player.name = inputtedName;
  };

  decreaseMilesToGoal = function(amount) {
    player.milesToGoal -= amount;
  };

  increaseMilesToGoal = function(amount) {
    player.milesToGoal += amount;
  };

  decreaseDaysRemaining(amount) {
    player.daysRemaining -= amount;
  };

  increaseDaysRemaining(amount) {
    player.daysRemaining += amount;
  };

  decreaseHp(amount) {
    player.hp -= amount;
  };

  increaseHp(amount) {
    player.hp += amount;
  };

  decreaseCrystals(amount) {
    player.crystals -= amount;
  };

  increaseCrystals(amount) {
    player.crystals += amount;
  };
  resetHp() {
    player.hp = player.maxHp;
  };
}
