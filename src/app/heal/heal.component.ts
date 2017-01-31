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
        this.playerService.increaseDaysRemaining(1);
        break;
      }
    }


}
