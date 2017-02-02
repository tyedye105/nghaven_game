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

  ngOnInit() {
    var that = this;
    setInterval(function(){
      that.progress = 100 - (that.player.milesToGoal / 15);
      console.log(that.progress);
    }, 100);
  }



  instructionsShowing: boolean = false;

  progress: number = null;

  showInstructions() {
    this.instructionsShowing = true;
  }

  hideInstructions() {
    this.instructionsShowing = false;
  }



}
