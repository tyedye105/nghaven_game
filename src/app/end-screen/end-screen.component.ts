import { Component } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service'

@Component({
  selector: 'end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss'],
  providers: [PlayerService]
})
export class EndScreenComponent {
  constructor(public playerService: PlayerService) { }

  player = this.playerService.getPlayer();


  dieReason = this.playerService.getPlayer().output[1];

  refresh() {
    location.reload();
  }
}
