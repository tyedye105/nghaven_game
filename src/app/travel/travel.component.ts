import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
  providers: [PlayerService]
})
export class TravelComponent {

  constructor(public playerService: PlayerService) { }

  travelEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.increaseDaysRemaining(1);
        break;
      case 2:
        this.playerService.increaseDaysRemaining(2);
        break;
      case 3:
        this.playerService.increaseDaysRemaining(3);
        break;
      case 4:
        this.playerService.decreaseDaysRemaining(1);
        break;
      case 5:
        this.playerService.decreaseDaysRemaining(2);
        break;
      case 6:
        this.playerService.decreaseDaysRemaining(3);
        break;
      case 7:
        this.playerService.increaseCrystals(10);
        break;
      case 8:
        this.playerService.increaseCrystals(20);
        break;
      case 9:
        this.playerService.increaseCrystals(30);
      break;
      case 10:
        this.playerService.decreaseCrystals(10);
        break;
      case 11:
        this.playerService.decreaseCrystals(20);
        break;
      case 12:
        this.playerService.decreaseCrystals(30);
        break;
      case 13:
        this.playerService.decreaseHp(10);
        break;
      case 14:
        this.playerService.decreaseHp(25);
        break;
      case 15:
        this.playerService.decreaseHp(50);
        break;
      case 16:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        break;
      case 17:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        }
      }

  travelFunction() {
    if (this.playerService.getPlayer().crystals >= 10) {
      var chanceOfEvent = Math.floor(Math.random() * 10) + 1
      var randomNumber = Math.floor(Math.random() * 17) + 1;
      //event
      if (chanceOfEvent <= 4) {
        this.travelEvents(randomNumber);
      };
      //Spends crystals to travel
      this.playerService.decreaseCrystals(10);
      //Decreases days remaining by 1
      this.playerService.decreaseDaysRemaining(1);
      //Travels speed * 10 miles
      this.playerService.decreaseMilesToGoal(this.playerService.getPlayer().speed * 10);
      //if HP is greater than Max Hp, hp becomes Max Hp
      if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
        this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
      }

      console.log(this.playerService.getPlayer());
    } else {
      alert("You don't have enough crystals to travel");
    }
  }

}
