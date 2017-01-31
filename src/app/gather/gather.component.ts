import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'gather',
  templateUrl: './gather.component.html',
  styleUrls: ['./gather.component.scss'],
  providers: [PlayerService]
})


export class GatherComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }


  gatherEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.decreaseDaysRemaining(20);
        break;
      case 2:
        this.playerService.decreaseCrystals(10);
        break;
      case 3:
        this.playerService.decreaseCrystals(20);
        break;
      case 4:
        this.playerService.increaseCrystals(10);
        break;
      case 5:
        this.playerService.increaseCrystals(20);
        break;
      case 6:
        this.playerService.increaseCrystals(30);
        break;
      case 7:
        this.playerService.decreaseHp(10);
        break;
      case 8:
        this.playerService.decreaseHp(50);
        break;
      case 9:
        this.playerService.decreaseHp(100);
        break;
      case 10:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        break;
      case 11:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        break;
      }
    }

  gatherFunction() {
    var randomNumber = Math.floor(Math.random() * 11) + 1;
    this.gatherEvents(randomNumber);

  }

}
