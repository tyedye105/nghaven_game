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
  constructor(public playerService: PlayerService) {}

  endGame: boolean = false;
  isNewPlayer: boolean = true;

  startGame() {
    this.isNewPlayer = false;
    var newPlayerName: string = prompt("Please Enter your name.");
    this.playerService.changeName(newPlayerName);
    this.playerService.isGameOver(false)
    console.log(this.playerService.getPlayer());
    }


  outputArray: string[] = this.playerService.getPlayer().output;

}
