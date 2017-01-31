import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss'],
  providers: [PlayerService]
})


export class RestComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  restEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.increaseDaysRemaining(1);
        break;
      case 2:
        this.playerService.decreaseDaysRemaining(1);
        break;
      case 3:
        this.playerService.increaseCrystals(50);
        break;
      case 4:
        this.playerService.decreaseCrystals(50);
        break;
      case 5:
        this.playerService.decreaseHp(20);
        break;
      case 6:
        this.playerService.resetHp();
        break;
      }
    }
    restFunction() {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      this.restEvents(randomNumber);
      console.log(this.playerService.getPlayer())
    }

  }
