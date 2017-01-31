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
  };

  increaseHealing() {
    this.playerService.getPlayer().healing += 1;
    this.playerService.getPlayer().monumentCheck = false;
  };

  increaseGathering() {
    this.playerService.getPlayer().gathering += 1;
    this.playerService.getPlayer().monumentCheck = false;
  };

  increaseMaxHp() {
    this.playerService.getPlayer().maxHp += 100;
    this.playerService.getPlayer().monumentCheck = false;
  };


}
