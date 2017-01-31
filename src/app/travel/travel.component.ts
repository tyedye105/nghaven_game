import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
  providers: [PlayerService]
})
export class TravelComponent implements OnInit {
    @Input() currentPlayer:Player;
    @Output() changeInPlayer = new EventEmitter();
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  tellMeYouName() {
    alert(this.currentPlayer.name);
  }

  travelEvents(randomNumber) {
    switch(randomNumber) {
      case 1:
        this.playerService.increaseDaysRemaining(1);
        break;
      case 2:
        this.playerService.increaseDaysRemaining(2);
        break;
      case 3:
        this.playerService.increaseDaysRemaining(3);
        break;
      case 4:
        this.playerService.decreaseDaysRemaining(1);
        break;
      case 5:
        this.playerService.decreaseDaysRemaining(2);
        break;
      case 6:
        this.playerService.decreaseDaysRemaining(3);
        break;
      case 7:
        this.playerService.increaseCrystals(10);
        break;
      case 8:
        this.playerService.increaseCrystals(20);
        break;
      case 9:
        this.playerService.increaseCrystals(30);
      break;
      case 10:
        this.playerService.decreaseCrystals(10);
        break;
      case 11:
        this.playerService.decreaseCrystals(20);
        break;
      case 12:
        this.playerService.decreaseCrystals(30);
        break;
      case 13:
        this.playerService.decreaseHp(10);
        break;
      case 14:
        this.playerService.decreaseHp(25);
        break;
      case 15:
        this.playerService.decreaseHp(50);
        break;
      case 16:
        this.playerService.increaseHp(10);
        this.playerService.increaseCrystals(10);
        break;
      case 17:
        this.playerService.decreaseHp(10);
        this.playerService.decreaseCrystals(10);
        }
      }


  travelFunction() {
    // var randomNumber = Math.floor(Math.random() * 17) + 1;
    // this.travelEvents(14);

    this.changeInPlayer.emit(-1);

  }

}


//
// if (randomNumber === 1) {
//     this.playerService.increaseDaysRemaining(1);
//   } else if (randomNumber === 2) {
//       this.playerService.increaseDaysRemaining(2);
//     } else if (randomNumber === 3) {
//       this.playerService.increaseDaysRemaining(3);
//     } else if (randomNumber === 4) {
//       this.playerService.decreaseDaysRemaining(1);
//     } else if (randomNumber === 5) {
//       this.playerService.decreaseDaysRemaining(2);
//     } else if (randomNumber === 6) {
//       this.playerService.decreaseDaysRemaining(3);
//     } else if (randomNumber === 7) {
//       this.playerService.increaseCrystals(10);
//     } else if (randomNumber === 8) {
//       this.playerService.increaseCrystals(20);
//     } else if (randomNumber === 9) {
//       this.playerService.increaseCrystals(30);
//     } else if (randomNumber === 10) {
//       this.playerService.decreaseCrystals(10);
//     } else if (randomNumber === 11) {
//       this.playerService.decreaseCrystals(20);
//     } else if (randomNumber === 12) {
//       this.playerService.decreaseCrystals(30);
//     } else if (randomNumber ===  13) {
//       this.playerService.decreaseHp(10);
//     } else if (randomNumber === 14) {
//       this.playerService.decreaseHp(25);
//     } else if (randomNumber === 15) {
//       this.playerService.decreaseHp(50);
//     } else if (randomNumber === 16) {
//       this.playerService.increaseHp(10);
//       this.playerService.increaseCrystals(10);
//     } else {
//       this.playerService.decreaseHp(10);
//       this.playerService.decreaseCrystals(10);
//     }
//   }
