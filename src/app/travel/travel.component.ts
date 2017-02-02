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
      this.playerService.getPlayer().output.unshift("<strong>Normally the landscape is full of rough terrain, and obstacles that even a military grade transport can't just barrel through. But today there was nothing to slow you down, and the traveler put pedal to the metal. <br><br>You gain 1 day.</strong><br>")
      break;
    case 2:
      this.playerService.increaseDaysRemaining(2);
      this.playerService.getPlayer().output.unshift("<strong>Along the way you encountered an owl riding a mechanical horse. You mention your current route, and the wanderer points out a shorter route! Netting you an extra couple of days. <br><br>You gain 2 days</strong><br>")
      break;
    case 3:
      this.playerService.increaseDaysRemaining(3);
      this.playerService.getPlayer().output.unshift("<strong>While traveling, the transport picks up stray radio signals from the 'People's Militia' . You over hear that they had established a defensive line to the south to keep the ‘Coyotes at bay.  Looking to the southern horizon you can see black smoke billowing in the sky. <br><br>You gain 3 days</strong><br>")
      break;
    case 4:
      this.playerService.decreaseDaysRemaining(1);
      this.playerService.getPlayer().output.unshift("<strong>In life, one encounters many obstacles, and challenges. During travel you encountered too many of these obstacles, preventing you traveling efficiently. <br><br>You lose 1 day</strong><br>")
      break;
    case 5:
      this.playerService.decreaseDaysRemaining(2);
      this.playerService.getPlayer().output.unshift("<strong> You encounter a large herd of lumbering Horned-Riat  .Giant rodent-like creatures, known for blocking roads, and paths for days. Also known for goring anyone that gets too close to them. Not wanting to disturb giant rodents, you wait for them to move.. Two days later they finally moved... <br><br>You lose 2 days.</strong><br>");
      break;
    case 6:
      this.playerService.decreaseDaysRemaining(3);
      this.playerService.getPlayer().output.unshift("<strong>You come across a large group of armed humans, a detachment from the larger force of the 'People's Militia'. They have created a defensive position to block the advancing Coyote Horde, however they block you too. So much for helping the people.. <br><br>You lose 3 days.</strong><br>");
      break;
    case 7:
      this.playerService.increaseCrystals(10);
      this.playerService.getPlayer().output.unshift("<strong>During your travels for the day you come across the charred remains of another transport. You make a brief stop to check the remains for crystals. Among the slaughtered crew you find a few extra crystals. <br><br>You gain 10 crystals</strong><br>")
      break;
    case 8:
      this.playerService.increaseCrystals(20);
      this.playerService.getPlayer().output.unshift("<strong>You were traveling at a good speed when the transport hits something. Hard. Quickly you stop to check for any damage to the transport. Moving towards the back you catch the familiar glint of crystals. It would appear you had run over someone's poorly placed secret stash. <br><br>You gain 20 crystals");
      break;
    case 9:
      this.playerService.increaseCrystals(30);
      this.playerService.getPlayer().output.unshift("<strong>As you traveled through the waste, silhouettes of some run down buildings appear over the horizon. Carefully your transport approaches the buildings, ready to speed off the moment something went wrong. Your caution was soon replaced with joy. The buildings used to be a crystal refinery. Better yet, there was still crystals to take! <br><br>You gain 30 crystals.</strong><br>");
    break;
    case 10:
      this.playerService.decreaseCrystals(10);
      this.playerService.getPlayer().output.unshift("<strong>After stopping for the day, you step out of the transport for some fresh air. With a deep inhale, you catch the unmistakable smell of charred critter. After a quick look, you find a poor creature that had managed to get stuck in the engine. Everything runs on crystals, not critters! <br><br>You lose 10 crystals.</strong><br>");
      break;
    case 11:
      this.playerService.decreaseCrystals(20);
      this.playerService.getPlayer().output.unshift("<strong>While traveling you meet a group of traders. Weary you decided to take a moment to stretch your legs, and look at what the traders had to offer. It was not long before you gathered your companions and resumed your travels. Much later in the day you notice that your crystal supply is lower than what it once was, and one of your companions is sporting a fancy new top hat. <br><br>You lose 20 crystals</strong><br>");
      break;
    case 12:
      this.playerService.decreaseCrystals(30);
      this.playerService.getPlayer().output.unshift("<strong>You had the misfortune of running into an enterprising group of bandits who have set up a blockade around the only route forward. Knowing it made no sense to fight them, you paid the toll. Almost as bad as the price of a small cup of Old-World Coffee. <br><br>You lose 30 crystals</strong><br>");
      break;
    case 13:
      this.playerService.decreaseHp(10);
      this.playerService.getPlayer().output.unshift("<strong>You transport barreled through a couple of flimsy bandit blockades. The transport didn't even take a scratch, you on the other you suffered some blunt force trauma as running the blockades launched you out of your comfy chair. <br><br>You lose 10 HP.</strong><br>");
      break;
    case 14:
      this.playerService.decreaseHp(25);
      this.playerService.getPlayer().output.unshift("<strong>You were cruising through a stretch of flatland, from out of nowhere gunshots pelt the side of the transport. It was a motley gang humans, and coyote on hover-bikes. With a wheeled transport it was impossible to outrun them. You get in the one gun emplacement on the top of the transport to drive them off. You  managed to drive them off, but not before taking a few hits yourself. <br><br>You lose 25 HP.</strong><br>");
      break;
    case 15:
      this.playerService.decreaseHp(50);
      this.playerService.getPlayer().output.unshift("<strong>A lone Horned-Riat, blocks your only path forward. Not wanting wait for the lazy thing to move, you decide to get out from the safety from the transport. Several minutes later, and badly wounded, you get back into the transport and yell at the driver to go before that damned thing comes back. <br><br>You lose 50 HP</strong><br>");
      break;
    case 16:
      this.playerService.increaseHp(10);
      this.playerService.increaseCrystals(10);
      this.playerService.getPlayer().output.unshift("<strong>While traveling you came across a handful of synthesized crystals are not only able to be used as fuel. They are edible! <br><br>You gain 10 HP and 10 Crystals</strong><br>");
      break;
    case 17:
      this.playerService.decreaseHp(10);
      this.playerService.decreaseCrystals(10);
      this.playerService.getPlayer().output.unshift("<strong>You encounter a beggar along your travels, you toss a few crystals down to them. The beggar thanks you, before pulling out a flare gun and shooting it up into the sky! Then the beggar pulls out another gun, grazing you as you duck back into the safety of the transport. Quickly you speed away not waiting for his friends to arrive. <br><br>You lose 10 HP and 10 crystals.</strong><br>");

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
