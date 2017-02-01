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
        this.playerService.getPlayer().output.unshift("Normally the landscape is full of rough terrain, and obstacles that even a millatary grade transport can't just barrel through. But today there was nothing to slow you down, and the pedal was put to the metal.")
        break;
      case 2:
        this.playerService.increaseDaysRemaining(2);
        this.playerService.getPlayer().output.unshift("Along the way you encounter a traveler familiar with the area, you mention your current route, and the traveler points out a shorter route! Netting you an extra couple of days.")
        break;
      case 3:
        this.playerService.increaseDaysRemaining(3);
        this.playerService.getPlayer().output.unshift("While traveling, the transport picks up stray radio signal's from the 'People's Militia' was establishing defensive line to the south. That will hold the coyotes at bay for a few days.")
        break;
      case 4:
        this.playerService.decreaseDaysRemaining(1);
        this.playerService.getPlayer().output.unshift("In life one will encounter many obstacles and challenges to overcome. During travel you encountered many of these obstacles, and lost a day.");
        break;
      case 5:
        this.playerService.decreaseDaysRemaining(2);
        this.playerService.getPlayer().output.unshift("A large herd of lumbering horned-Riat. Giant rodent-like creatures, known for blocking roads, and paths for potentially days. Also known for goring anyone that gets too close to them. Not wanting to disturb giant rodents, you wait for them to move. 2 days later they finally moved...");
        break;
      case 6:
        this.playerService.decreaseDaysRemaining(3);
        this.playerService.getPlayer().output.unshift("You come across a large group of armed humans, a detachment from the larger force of the 'People's Militia'. They have created a defensive position to block the advancing Coyote Horde, however they block you too. So much for helping the people..");
        break;
      case 7:
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("During your travels for the day you come across the charred remains of another transport. You make a brief stop to check the remains for crystals. Among the slaughtered crew you find a few extra crystals.");
        break;
      case 8:
        this.playerService.increaseCrystals(20);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 9:
        this.playerService.increaseCrystals(30);
        this.playerService.getPlayer().output.unshift("event description here");
      break;
      case 10:
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 11:
        this.playerService.decreaseCrystals(20);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 12:
        this.playerService.decreaseCrystals(30);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 13:
        this.playerService.decreaseHp(10);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 14:
        this.playerService.decreaseHp(25);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 15:
        this.playerService.decreaseHp(50);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 16:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("event description here");
        break;
      case 17:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift("event description here");
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
      this.playerService.getPlayer().output.unshift("You travel for the day, moving you closer to Haven. 20 crystals were depleted.");
      //Spends crystals to travel
      this.playerService.decreaseCrystals(20);
      //Decreases days remaining by 1
      this.playerService.decreaseDaysRemaining(1);
      //Travels speed * 10 miles
      this.playerService.decreaseMilesToGoal(this.playerService.getPlayer().speed * 10);
      //if HP is greater than Max Hp, hp becomes Max Hp
      if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
        this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
      };

    } else {
      this.playerService.getPlayer().output.unshift("You don't have enough crystals to travel");
    }
  }

}
