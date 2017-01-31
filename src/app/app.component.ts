import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService]
})

export class AppComponent {
  constructor(public playerService: PlayerService, ) {}


  isNewPlayer: boolean = true;

  startGame() {
    this.isNewPlayer = false;
    var newPlayerName: string = prompt("Please Enter your name.");
    this.playerService.changeName(newPlayerName);
    console.log(this.playerService.getPlayer());
    }

}
