import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService]
})

export class AppComponent implements OnInit {
  constructor(public playerService: PlayerService) {}

  ngOnInit() {
  }

  endGame: boolean = false;
  isNewPlayer: boolean = false;

  name: string = "Adventurer";

  startGame() {
    this.isNewPlayer = true;
    var newPlayerName: string = this.name;
    this.playerService.changeName(newPlayerName);
  }

  outputArray: string[] = this.playerService.getPlayer().output;

}
