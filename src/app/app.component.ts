import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';
// import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService]
})



export class AppComponent implements OnInit {
  currentPlayer: Player;
  isNewPlayer: boolean = true;
  startGame() {
    this.isNewPlayer = false;
  var  newPlayerName: string = prompt("Please Enter your name.")
    this.currentPlayer = this.playerService.newPlayer;
    this.currentPlayer.name = newPlayerName;
    console.log(this.currentPlayer);
    return this.currentPlayer
    }

  constructor(private playerService: PlayerService, ) {}

  ngOnInit() {
    var player = this.playerService.newPlayer;
    console.log(player)
  }


}
