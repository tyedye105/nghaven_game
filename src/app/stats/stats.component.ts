import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service'

@Component({
  selector: 'game-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  providers: [PlayerService]
})
export class StatsComponent implements OnInit {
  player = this.playerService.getPlayer()

  constructor(public playerService: PlayerService) { }

  progress = 1500 / this.player.milesToGoal + "%";

  test: string = "50%";

  ngOnInit() {
  }

  instructionsShowing: boolean = false;

  showInstructions() {
    this.instructionsShowing = true;
  }

  hideInstructions() {
    this.instructionsShowing = false;
  }



}
