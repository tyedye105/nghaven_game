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
        this.playerService.getPlayer().output.unshift("While traveling, the transport picks up stray radio signal's from the 'People's Militia' was establishing defensive line to the south. Looking southwards you can see the signs of battle of in the distance.")
        break;
      case 4:
        this.playerService.decreaseDaysRemaining(1);
        this.playerService.getPlayer().output.unshift("In life one will encounter many obstacles and challenges to overcome. During travel you encountered many of these obstacles, and lost a day.")
        break;
      case 5:
        this.playerService.decreaseDaysRemaining(2);
        this.playerService.getPlayer().output.unshift("A large herd of lumbering horned-Riat. Giant rodent-like creatures, known for blocking roads, and paths for potentially days. Also known for goring anyone that gets too close to them. Not wanting to disturb giant rodents, you wait for them to move. two days later they finally moved...");
        break;
      case 6:
        this.playerService.decreaseDaysRemaining(3);
        this.playerService.getPlayer().output.unshift("You come across a large group of armed humans, a detachment from the larger force of the 'People's Militia'. They have created a defensive position to block the advancing Coyote Horde, however they block you too. So much for helping the people..");
        break;
      case 7:
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("During your travels for the day you come across the charred remains of another transport. You make a brief stop to check the remains for crystals. Among the slaughtered crew you find a few extra crystals.")
        break;
      case 8:
        this.playerService.increaseCrystals(20);
        this.playerService.getPlayer().output.unshift("You were traveling at a good speed when the transport hits something hit something hard. Quickly you stop and get out to check for any damage to the transport. Moving towards the back of the transport you catch the familiar glint of crystals. It would appear you had run over someone's secret stash.");
        break;
      case 9:
        this.playerService.increaseCrystals(30);
        this.playerService.getPlayer().output.unshift("As you traveled through the waste, the silhouettes of some run down buildings appear in your direction. Carefully your transport approaches the buildings, ready to speed off the moment something went wrong. Caution was soon replaced with joy. The building the remains of an old crystal refinery. Better yet, there was still crystals to take!");
      break;
      case 10:
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift("After stoping for the day, you step out of the transport for some fresh air. With a deep inhale, there is the unmistakable smell of charred critter. After a quick look at the transport, you find a poor creature that had managed to get stuck in the engine, making the engine less efficient. Everything runs on crystals, not critters!");
        break;
      case 11:
        this.playerService.decreaseCrystals(20);
        this.playerService.getPlayer().output.unshift("While traveling you meet a group of traders. Weary you decided to take a moment to stretch your legs, and look at what the traders had to offer. It was not longer before you gathered your companions and resume your travels. Much latter in the day you notice that your crystal supply is lower than what it once was, and one of your companions is sporting a fancy new top hat.");
        break;
      case 12:
        this.playerService.decreaseCrystals(30);
        this.playerService.getPlayer().output.unshift("You had the misfortune of running into a enterprising group of bandits who have set up a blockade around the only route forward. Know it made no sense to fight them, you paid the toll. Almost as bad as the price of a small cup of Old-World Coffee.");
        break;
      case 13:
        this.playerService.decreaseHp(10);
        this.playerService.getPlayer().output.unshift("You transport barreled through a couple of flimsy bandit blockades. The transport didn't even take a scratch, you on the other you suffered some blunt force trauma as running the blockades launched you out of your comfy chair.");
        break;
      case 14:
        this.playerService.decreaseHp(25);
        this.playerService.getPlayer().output.unshift("You were cruising though a stretch of flatland, then from out of nowhere there are gunshots pelting the side of the transport. It was a motley gang humans, and coyote and hover-bikes. With a wheeled transport it would be impossible to out run them. One of your companions gets on the one gun emplacement on the top of the transport. They managed to drive them off, but not while taking a few hits themselves.");
        break;
      case 15:
        this.playerService.decreaseHp(50);
        this.playerService.getPlayer().output.unshift("A lone Horned-Riat, blocks your only path forward. Not wanting wait for the lazy thing to move, you decide to get out from the safety from the transport. several minutes later, winded, and badly wounded, you get back into the transport and yell at the driver to go before that damned thing comes back.");
        break;
      case 16:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("While traveling you came across a handfull of synthesized crystals are not only able to be used as full. They are edible!");
        break;
      case 17:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift("You encounter a beggar along your travels, you toss a few crystals down to them. The beggar thanks you, before pulling out a flare gun and shooting it up into the sky! Then the beggar pulls out another gun, grazing you as you duck back into the safety of the transport. Quickly you speed away not waiting for his friends to arrive.");

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
