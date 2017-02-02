import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { player } from './player'

@Injectable()
export class PlayerService {
  constructor() { }
  //
  // isGameOver = function(boolean) {
  //   player.gameOver = boolean;
  // }

  getPlayer = function() {
    return player;
  }

  changeName = function(inputtedName) {
    player.name = inputtedName;
  };

  decreaseMilesToGoal = function(amount) {
    player.milesToGoal -= amount;
    this.endGameCheck();
    this.checkIfMonument();

  };

  increaseMilesToGoal = function(amount) {
    player.milesToGoal += amount;
  };

  decreaseDaysRemaining(amount) {
    player.daysRemaining -= amount;
    this.endGameCheck();
  };

  increaseDaysRemaining(amount) {
    player.daysRemaining += amount;
  };

  decreaseHp(amount) {
    player.hp -= amount;
    this.endGameCheck();
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

  endGameCheck() {
    if (player.hp <= 0) {
      player.gameOver = "died";
    } else if  (player.daysRemaining <= 0) {
      player.gameOver = "time";
    } else if (player.milesToGoal <= 0) {
      player.gameOver = "won";
    }
  }
  resetHp() {
    player.hp = player.maxHp;
  };

  //Monument functionality

  checkIfMonument() {

    //first monument
    if(player.milesToGoal <= 800 && player.lastMonument === 0) {
      player.lastMonument = 1;
      player.monumentCheck = true;
    }

    //Second monument
    if(player.milesToGoal <= 600 && player.lastMonument === 1) {
      player.lastMonument = 2;
      player.monumentCheck = true;
    }

    //Third monument
    if(player.milesToGoal <= 400 && player.lastMonument === 2) {
      player.lastMonument = 3;
      player.monumentCheck = true;
    }

    //Fourth monument
    if(player.milesToGoal <= 200 && player.lastMonument === 3) {
      player.lastMonument = 4;
      player.monumentCheck = true;
    }
  }



}
