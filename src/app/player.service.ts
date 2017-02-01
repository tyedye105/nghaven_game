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
    if(player.milesToGoal <= 800 && !player.monumentOneCheck) {
      player.monumentOneCheck = true;
      player.monumentCheck = true;
      alert("at monumentOneCheck");
    }

    //Second monument
    if(player.milesToGoal <= 600 && !player.monumentTwoCheck) {
      player.monumentOneCheck =false;
      player.monumentTwoCheck = true;
      player.monumentCheck = true;
      alert("at monumentTWO");
    }

    //Third monument
    if(player.milesToGoal <= 400 && !player.monumentThreeCheck) {
      player.monumentOneCheck = false;
      player.monumentTwoCheck = false;
      player.monumentThreeCheck = true;
      player.monumentCheck = true;
      alert("at monumentTHREE");
    }

    //Fourth monument
    if(player.milesToGoal <= 200 && !player.monumentFourCheck) {
      player.monumentOneCheck = false;
      player.monumentTwoCheck = false;
      player.monumentThreeCheck = false;
      player.monumentFourCheck = true;
      player.monumentCheck = true;
      alert("at monumentFOUR");
    }
  }



}
