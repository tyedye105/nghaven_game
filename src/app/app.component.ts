import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
// import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService]
})



export class AppComponent implements OnInit {
  isNewPlayer: boolean = true;
  startGame() {
    this.isNewPlayer = false;
    }

  constructor(private playerService: PlayerService, ) {}

  ngOnInit() {
    var player = this.playerService.newPlayer;
    console.log(player)
  }


}
