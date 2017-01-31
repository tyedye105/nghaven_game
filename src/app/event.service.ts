// import { Injectable } from '@angular/core';
// import { Player } from './player.model';
// import { PlayerService } from './player.service';
//
// @Injectable()
// export class EventService {
//
//   constructor() { }
//
//
//     travelEvents = [
//       function(player) {
//         this.playerService.increaseDaysRemaining(1);
//         //output "You gained one day"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseDaysRemaining(2);
//         //output "You gained two days"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseDaysRemaining(3);
//         //output "You gained three days"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseDaysRemaining(1);
//         //output "You lost one day"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseDaysRemaining(2);
//         //output "You lost two days"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseDaysRemaining(3);
//         //output "You lost three days"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseCrystals(10);
//         //output "You gained 10 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseCrystals(20);
//         //output "You gained 20 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseCrystals(30);
//         //output "You gained 30 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseCrystals(10);
//         //output "You lost 10 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseCrystals(20);
//         //output "You lost 20 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseCrystals(30);
//         //output "You lost 30 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseHp(10);
//         //output "You lost 10 HP"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseHp(25);
//         //output "You lost 25 HP"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseHp(50);
//         //output "You gained 50 crystals"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.increaseHp(10);
//         this.playerService.increaseCrystals(10);
//         //output "You gained 10 crystals and 10 hp"
//         console.log(this.newPlayer);
//       },
//       function() {
//         this.playerService.decreaseHp(10);
//         this.playerService.decreaseCrystals(10);
//         //output "You lost 10 crystals and 10 hp"
//         console.log(this.newPlayer);
//       }
//     ]
//
//     // getTravelEvent(player) {
//     //   this.travelEvents[0]();
//     // }
//
//
// }
//
// //
// // Travel events: +1 days remaining
// // +2 days remaining
// // +3 days remaining
// // -1 days remaining
// // -2 days remaining
// // -3 days remaining
// // -10 crystals
// // -20 crystals
// // +10 crystals
// // +20 crystals
// // -10 HP
// // -25 HP
// // -50 HP
// // +10HP and +10crystals
// // -10HP and -10crystals
