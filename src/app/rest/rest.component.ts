import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss'],
  providers: [PlayerService]
})


export class RestComponent {

  constructor(private playerService: PlayerService) { }

  restEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.increaseDaysRemaining(1);
        break;
      case 2:
        this.playerService.decreaseDaysRemaining(1);
        break;
      case 3:
        this.playerService.increaseCrystals(50);
        break;
      case 4:
        this.playerService.decreaseCrystals(50);
        break;
      case 5:
        this.playerService.decreaseHp(20);
        break;
      case 6:
        this.playerService.resetHp();
        break;
      }
    }
    restFunction() {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      this.restEvents(randomNumber);
      if (this.playerService.getPlayer().crystals >= 10) {
        var chanceOfEvent = Math.floor(Math.random() * 10) + 1
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        //event
        if (chanceOfEvent <= 1) {
          this.restEvents(randomNumber);
          console.log("event happened")
        }
        this.playerService.getPlayer().output.unshift("You rest for the day, healing yourself, and burning 10 crystals to cook some food.");
        //spend crystals to rest
        this.playerService.decreaseCrystals(10);
        //decrease day remaining by 1
        this.playerService.decreaseDaysRemaining(1);
        //increase HP by healing * 20
        this.playerService.increaseHp(this.playerService.getPlayer().healing * 20);
        //if HP is greater than Max Hp, hp becomes Max Hp
        if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
          this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
        }

        console.log(this.playerService.getPlayer())
      } else {
        alert("You don't have enough crystals to rest");
      }
    }
}
