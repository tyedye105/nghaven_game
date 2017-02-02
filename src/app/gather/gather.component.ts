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
        this.playerService.decreaseDaysRemaining(20);
        this.playerService.getPlayer().output.unshift("")
        break;
      case 2:
        this.playerService.decreaseCrystals(10);

        this.playerService.getPlayer().output.unshift("<strong>You scout the area looking for an crystal formations large enough to merit harvesting.  Unfortunately it would appear most of the existing formations have been harvested. You chip away and grab the smaller crystals, but you know not all of them will be of use. <br><br>You lose 10 crystals</strong><br>");
        break;
      case 3:
        this.playerService.decreaseCrystals(20);
        this.playerService.getPlayer().output.unshift("<strong>You were coming back from a sucessful crystal gathering run, when from behind a out croping of rocks an unkown person knocks you down.  Before you can get up of the ground the mysterious attacker grabbed all the crystals they could and took off on a hover-bike they had camoflauged nearby. <br><br>You lose 20 crystals</strong><br>")
        break;
      case 4:
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("<strong>On this particular trip to gather crystals, you come across what was once a small mining operation. Behind the miner's offices were steel tracks leading into a cave.  Your eye catches the faint glow of crystals in the darkness. Not daring to go too deep you poke around the mouth of the cave, finding some easy crystals. You gain 10 crystals.</strong><br>")
        break;
      case 5:
        this.playerService.increaseCrystals(20);
        this.playerService.getPlayer().output.unshift("<strong>The moment you left the transport, you had a feeling that you were going to find a good source of crystals. It's not long before you discover tall rock formation that could be used to survey the area. It was physically exhuasting to get to the top of that rock, but viewing the wasteland from such a hight made it all seem not that bad. <br><br>You gain 20 crystals.</strong><br>")
        break;
      case 6:
        this.playerService.increaseCrystals(30);
        this.playerService.getPlayer().output.unshift("<strong>Combing the area for crystals you discover a large cave opening.  At first you dismiss it, aware that the bigger the opening, the bigger the creature that could be lurking in the darkness.  But then you see it, not just a faint glow, but something like solid light off in the distance.  Bravely you enter the cave, the scattered bones that lay on the ground a clear indicator that some predatory beast lives in this cave, but you dare to press on.  Your bravery was quickly rewarded as you come across one of the largest crystals you have ever seen. You grab the crystal, and bravely sprint out of the cave. <br><br>You gain 30 crystals.</strong><br>")
        break;
      case 7:
        this.playerService.decreaseHp(10);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all to well just how important they were to your survival. You climb a small rock formatino to grab some crystalls. The moment they are in your hand, the rocks supporting your footing give way.  Luckily it was only a short drop, but it still hurt. <br><br>You lose 10 HP.</strong><br>")
        break;
      case 8:
        this.playerService.decreaseHp(25);
        this.playerService.getPlayer().output.unshift("<strong>While out searching for crystals, you had a hard time finding ones that were easy to get.  Knowing all to well just how important they were to your survival. You climb a small rock formatino to grab some crystalls. The moment they are in your hand, the rocks supporting your footing give way. Luckily it was only a short drop, but it still hurt. <br><br>You lose 25 HP.</strong><br>")
        break;
      case 9:
        this.playerService.decreaseHp(50);
        this.playerService.getPlayer().output.unshift("<strong>Combing the area for crystals you discover a large cave opening.  At first you dismiss it, aware that the bigger the opening, the bigger the creature that could be lurking in the darkness.  But then you see it, not just a faint glow, but something like solid light off in the distance.  Bravely you enter the cave, the scattered bones that lay on the ground a clear indicator that some predatory beast lives in this cave.  Your nerves frayed you sprint towards the large crystal, with every step accented by the crunching of bones. The moment you have the crystal in your grasp, you hear heavy thud behind. A giant squid like creature is staring you down with one giant eye, covered in a layer of rocks. You start moving to run away, but one of it's tentacles slams the ground blocking you escape.  You retreat back further into the cave, as you do you look back to notice it''s giant pupil is not trained on you but the crystal.  On a hunch threw the crystal as far away from as possible, and creature takes off trying to catch the crsytal.  As you run past it you hear the sounds of something shattering, followed by strange clicking sounds.  crystals don't shatter... You take a look back to see a tiny squid creature writhing on the ground where the crystal landed.  The cave squid turn around, its eye seething with anger, let out a series of loud clicks and screeches. Then you expeirenced a moment of terrible clarity. It was not a crystal you were trying to take... By sheer luck you managed to escape, with enough energy to reach the transport, before collapsing as a bloody mess. <br><br>You lose 50 HP.</strong><br>")
        break;
      case 10:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        this.playerService.getPlayer().output.unshift("<strong>During this gathering trip you found yourself incredibly hungry. You take a chance on a strange looking mushroom. It was delicous. <br><br>You gain 10 HP and 10 crystals.</strong><br>")
        break;
      case 11:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        this.playerService.getPlayer().output.unshift('<strong>During this gathering trip you found yourself incredibly hungry.  You take a chance on a strange looking mushroom. You went about your way grabbing all the crystals you find.  However up your return, you companions ask why you brought a bunch of mushrooms.. <br><br>You lose 10 HP and 10 crystals.</strong><br>')
        break;
      }
    }

  gatherFunction() {
    var chanceOfEvent = Math.floor(Math.random() * 10) + 1;
    var randomNumber = Math.floor(Math.random() * 11) + 1;

    //event
    if (chanceOfEvent <= 5 ) {
      this.gatherEvents(randomNumber);
    };
    this.playerService.getPlayer().output.unshift("You gather some crystals from nearby.");
    //increase crystals by gathering skill * 20
    this.playerService.increaseCrystals(this.playerService.getPlayer().gathering * 20);
    //decrease days remaining by 1
    this.playerService.decreaseDaysRemaining(1);
    //if HP is greater than Max Hp, hp becomes Max Hp
    if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
      this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
    }
    console.log(this.playerService.getPlayer())
  }

}
