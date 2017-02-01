import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.scss'],
  providers: [PlayerService]
})


export class HealComponent {

  constructor(private playerService: PlayerService) { }

    healFunction() {
      var randomNumber = Math.floor(Math.random() * 8) + 1;
      if (this.playerService.getPlayer().crystals >= 30) {
          this.playerService.getPlayer().output.unshift("You use 30 crystals to heal your HP");
          //Spends crystals
          this.playerService.decreaseCrystals(30);
          //generates heal amount by randomly selecting 20 - 50 and multiplying by healing skill
          var healAmount = (Math.floor(Math.random() * 30) + 20) * this.playerService.getPlayer().healing;
          //heals player
          this.playerService.increaseHp(healAmount);
          //if HP is greater than Max Hp, hp becomes Max Hp
          if (this.playerService.getPlayer().hp >= this.playerService.getPlayer().maxHp) {
            this.playerService.getPlayer().hp = this.playerService.getPlayer().maxHp;
          }
          console.log(this.playerService.getPlayer())
        } else {
          this.playerService.getPlayer().output.unshift("You don't have enough crystals!")
        }
    }
}
