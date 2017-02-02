import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'gather',
  templateUrl: './gather.component.html',
  styleUrls: ['./gather.component.scss'],
  providers: [PlayerService]
})

export class GatherComponent {
  constructor(private playerService: PlayerService) { }

  gatherEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.decreaseDaysRemaining(1);
        this.playerService.getPlayer().output.unshift("<strong>You scout the area looking for an crystal formations large enough to merit harvesting.  Unfortunately you were unable to find any crystals, and wasted a day.<br><br>You lose 1 day</strong><br>");
        break;
      case 2:
        this.playerService.decreaseHp(25);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all too well just how important they were to your survival. You enter an old run down building trying to find some crystals. You succeeded  but you managed to catch your arm in a bear trap. <br><br>You lose 25 HP.</strong><br>")
        break;
      case 3:
        this.playerService.decreaseHp(10);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all too well just how important they were to your survival. You climb a small rock formation to grab some crystals. The moment they are in your hand, the rocks supporting your footing give way.  Luckily it was only a short drop, but it still hurt. <br><br>You lose 10 HP.</strong><br>")
        break;
      case 4:
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("<strong>On this particular trip to gather crystals, you come across what was once a small mining operation. Behind the miner's offices were steel tracks leading into a cave.  Your eye catches the faint glow of crystals in the darkness. Not daring to go too deep you poke around the mouth of the cave, finding some easy crystals. You gain 10 crystals.</strong><br>")
        break;
      case 5:
        this.playerService.increaseCrystals(20);
        this.playerService.getPlayer().output.unshift("<strong>The moment you left the transport, you had a feeling that you were going to find a good source of crystals. It's not long before you discover tall rock formation that could be used to survey the area. It was physically exhausting to get to the top of that rock, but viewing the wasteland from such a height made it all seem not that bad. Nor was the crystals at the top of that rock.<br><br>You gain 20 crystals.</strong><br>")
        break;
      case 6:
        this.playerService.increaseCrystals(30);
        this.playerService.getPlayer().output.unshift("<strong>Combing the area for crystals you discover a large cave opening.  At first you dismiss it, aware that the bigger the opening, the bigger the creature that could be lurking in the darkness.  But then you see it, not just a faint glow, but something like solid light off in the distance.  Bravely you enter the cave, the scattered bones that lay on the ground a clear indicator that some predatory beast lives in this cave, but you dared to press on.  Your bravery was quickly rewarded as you come across one of the largest crystals you have ever seen. You grab the crystal, and bravely sprint out of the cave. <br><br>You gain 30 crystals.</strong><br>")
        break;
      case 7:
        this.playerService.decreaseHp(10);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all too well just how important they were to your survival. You climb a small rock formation to grab some crystals. The moment they are in your hand, the rocks supporting your footing give way.  Luckily it was only a short drop, but it still hurt. <br><br>You lose 10 HP.</strong><br>")
        break;
      case 8:
        this.playerService.decreaseHp(25);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all too well just how important they were to your survival. You enter an old run down building trying to find some crystals. You succeeded  but you managed to catch your arm in a bear trap.<br><br>You lose 25 HP.</strong><br>")
        break;
      case 9:
        this.playerService.decreaseHp(30);
        this.playerService.getPlayer().output.unshift("<strong>Combing the area for crystals you discover a large cave opening.   Bravely you enter the cave, the scattered bones that lay on the ground a clear indicator that some predatory beast lives in this cave.  Your nerves frayed you sprint towards the large crystal near the back of the cave. The moment you have the crystal in your grasp, you hear heavy thud behind.A Ro-Quid, a giant squid like creature is stares you down with it’s one giant eye. You start moving to run away, but one of it's tentacles slams the ground blocking you escape.  You retreat back further into the cave, as you do you look back to notice it''s giant pupil is not trained on you but the crystal.  On a hunch threw the crystal as far away from as possible, and creature takes off trying to catch the crystal.  As you run past it you hear the sounds of something shattering, followed by strange clicking sounds.  crystals don't shatter... You take a look back to see a tiny squid creature writhing on the ground where the crystal landed.  The Ro-Quid turn around, its eye seething with anger, let out a series of loud clicks and screeches. Then you experienced a moment of terrible clarity. It was not a crystal you were trying to take... By sheer luck you managed to escape, with enough energy to reach the transport, before collapsing as a bloody mess. <br><br>You lose 30 HP.</strong><br>")
        break;
      case 10:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("<strong>During this gathering trip you found yourself incredibly hungry. You take a chance on a strange looking mushroom. It was delicious. <br><br>You gain 10 HP and 10 crystals.</strong><br>")
        break;
      case 11:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift('<strong>During this gathering trip you found yourself incredibly hungry.  You take a chance on a strange looking mushroom. You went about your way grabbing all the crystals you find.  However up your return, you companions ask why you picked thorn covered fruit. <br><br>You lose 10 HP and 10 crystals.</strong><br>')
        break;
      }
    }



  gatherFunction() {
    var chanceOfEvent = Math.floor(Math.random() * 10) + 1;
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    // this.playerService.getPlayer().output.unshift("You gather some crystals from nearby.");
      //event
    if (chanceOfEvent <= 5 ) {
      this.gatherEvents(randomNumber);
    };
    //increase crystals by gathering skill * 20
    this.playerService.increaseCrystals(this.playerService.getPlayer().gathering * 20);
    //decrease days remaining by 1
    this.playerService.decreaseDaysRemaining(1);
    //if HP is greater than Max Hp, hp becomes Max Hp
    if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
      this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
    }
  }

}
