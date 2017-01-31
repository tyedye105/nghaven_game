import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GameTextComponent } from './game-text/game-text.component';
import { StatsComponent } from './stats/stats.component';
import { TravelComponent } from './travel/travel.component';
import { GatherComponent } from './gather/gather.component';
import { RestComponent } from './rest/rest.component';
import { HealComponent } from './heal/heal.component';
import { AboutComponent } from './about/about.component';

import { Player } from './player.model';
<<<<<<< HEAD
import { EndScreenComponent } from './end-screen/end-screen.component';
=======
import { MonumentsComponent } from './monuments/monuments.component';
>>>>>>> b59ac77d22643a2bfa9d69c0abad92ff1b25c858

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GameTextComponent,
    StatsComponent,
    TravelComponent,
    GatherComponent,
    RestComponent,
    HealComponent,
    AboutComponent,
<<<<<<< HEAD
    EndScreenComponent
=======
    MonumentsComponent
>>>>>>> b59ac77d22643a2bfa9d69c0abad92ff1b25c858
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
