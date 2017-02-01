import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'monuments',
  templateUrl: './monuments.component.html',
  styleUrls: ['./monuments.component.scss'],
  providers: [PlayerService]
})
export class MonumentsComponent {

  constructor(private playerService: PlayerService) { }

  getMonumentCheck() {
    return this.playerService.getPlayer().monumentCheck;
  }

  increaseSpeed() {
    this.playerService.getPlayer().speed += 1;
    this.playerService.getPlayer().monumentCheck = false;
    this.playerService.getPlayer().output.unshift("You've increased your speed by 1, allowing you to travel further distances each day.");
  };

  increaseHealing() {
    this.playerService.getPlayer().healing += 1;
    this.playerService.getPlayer().monumentCheck = false;
    this.playerService.getPlayer().output.unshift("You've increased your healing magic by 1, allowing you to heal yourself for a greater amount of HP.");
  };

  increaseGathering() {
    this.playerService.getPlayer().gathering += 1;
    this.playerService.getPlayer().monumentCheck = false;
    this.playerService.getPlayer().output.unshift("You've increased your gathering ability by 1, allowing you to spot more crystals when gathering.");
  };

  increaseMaxHp() {
    this.playerService.getPlayer().maxHp += 100;
    this.playerService.getPlayer().monumentCheck = false;
    this.playerService.getPlayer().output.unshift("You've increased your Max HP by 100, allowing you to take more hits.");
  };


}
