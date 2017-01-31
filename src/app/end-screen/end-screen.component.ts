import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service'

@Component({
  selector: ' end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.scss'],
  providers: [PlayerService]
})
export class EndScreenComponent {
      player = this.playerService.getPlayer()
  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }

}
