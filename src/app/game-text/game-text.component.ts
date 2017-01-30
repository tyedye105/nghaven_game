import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'game-text',
  templateUrl: './game-text.component.html',
  styleUrls: ['./game-text.component.scss']
})
export class GameTextComponent implements OnInit {
  gameIntro: string = "Game text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  constructor() { }

  ngOnInit() {
  }

}
