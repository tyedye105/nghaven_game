import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlayerService,
              EventService]
})

export class AppComponent implements OnInit {
  constructor(private playerService: PlayerService, private eventService: EventService) {}

  ngOnInit() {
    var player = this.playerService.newPlayer;
    this.eventService.getTravelEvent(player);
    console.log(player)
  }


}
