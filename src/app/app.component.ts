import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isNewPlayer: boolean = true;
    startGame() {
      this.isNewPlayer = false;
    }


}
