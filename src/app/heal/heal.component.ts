import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.scss'],
  providers: [PlayerService]
})


export class HealComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  healEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.decreaseCrystals(10);
        break;
      case 2:
        this.playerService.decreaseCrystals(20);
        break;
      case 3:
        this.playerService.decreaseCrystals(30);
        break;
      case 4:
        this.playerService.increaseHp(20);
        break;
      case 5:
        this.playerService.increaseHp(30);
        break;
      case 6:
        this.playerService.increaseHp(40);
        break;
      case 7:
        this.playerService.increaseHp(50);
        break;
      case 8:
        this.playerService.resetHp();
        break;
      }
    }

    healFunction() {
      var randomNumber = Math.floor(Math.random() * 8) + 1;
      this.healEvents(randomNumber);

    }
}
