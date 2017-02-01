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
          this.playerService.getPlayer().output.unshift("You have been traveling, and gathering crystals as you need, but now you need to take break from it all and rest. While enjoying the finest cuisines and a food synthesizer, there was a radio transmission speaking of the People's Militia pushing the coyotes back, giving you another day to get to Haven")
        break;
      case 2:
        this.playerService.decreaseDaysRemaining(1);
        this.playerService.getPlayer().output.unshift("Tired, and weary, you stop to rest and recuperate for the day. You and your companions so worn down you slept for another day without realizing it.")
        break;
      case 3:
        this.playerService.increaseCrystals(50);
        this.playerService.getPlayer().output.unshift("In a strange dream, there was a small bird that leads you to a mound of crystals nearby. Upon waking up you, you see the same mound 10 feet away . You check the mound to find a whole bunch of crystals! Dreams do come true!")
        break;
      case 4:
        this.playerService.decreaseCrystals(50);
        this.playerService.getPlayer().output.unshift("While sleeping, an opportunistic thief struck your crystal stash...")
        break;
      case 5:
        this.playerService.decreaseHp(20);
        this.playerService.getPlayer().output.unshift("You don't believe, but the next morning your companions are telling you that you started sleeping walking, and stepped on a rolling urchin. Though that would explain the horrific pain in your left foot.")
        break;
      case 6:
        this.playerService.resetHp();
        this.playerService.getPlayer().output.unshift("You stop to rest for the night, and have the best sleep you ever had. You wake up feel completely rejuvenated.")
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
