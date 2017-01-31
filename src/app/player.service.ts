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
    this.checkIfMonument();
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
    if (player.crystals >= amount) {
      player.crystals -= amount;
    } else {
      player.crystals = 0;
    }
  };

  increaseCrystals(amount) {
    player.crystals += amount;
  };

  resetHp() {
    player.hp = player.maxHp;
  };

  //Monument functionality

  checkIfMonument() {

    //first monument
    if(player.milesToGoal <= 800 && !player.monumentOneCheck) {
      player.monumentOneCheck = true;
      player.monumentCheck = true;
    }

    //Second monument
    if(player.milesToGoal <= 600 && !player.monumentTwoCheck) {
      player.monumentTwoCheck = true;
      player.monumentCheck = true;
    }

    //Third monument
    if(player.milesToGoal <= 400 && !player.monumentThreeCheck) {
      player.monumentThreeCheck = true;
      player.monumentCheck = true;
    }

    //Fourth monument
    if(player.milesToGoal <= 200 && !player.monumentFourCheck) {
      player.monumentFourCheck = true;
      player.monumentCheck = true;
    }
  }



}
