import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  playerStats: Array<string> = ["Health: 100", "Crystals :300", "10 miles per day", "Days Remaining: 100" ];
  constructor() { }

  ngOnInit() {
  }

}
