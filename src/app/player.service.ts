import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { player } from './player'

@Injectable()
export class PlayerService {
  constructor() { }

  isGameOver = function(boolean) {
    player.gameOver = boolean;
  }



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
      alert("You Died of Dysntery");
      player.gameOver = true;
    } else if  (player.daysRemaining <= 0) {
      alert("You didn't reach Haven in time. The horde of 'coyotes that had been trailing behind you finally chaught up to and ended your lives.")
      player.gameOver = true;
    } else if (player.milesToGoal <= 0) {
      alert("You have made it to Haven.  Congratulations.");
      player.gameOver = true;
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
