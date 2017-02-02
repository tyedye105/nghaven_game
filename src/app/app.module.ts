import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { TravelComponent } from './travel/travel.component';
import { GatherComponent } from './gather/gather.component';
import { RestComponent } from './rest/rest.component';
import { HealComponent } from './heal/heal.component'; 
import { Player } from './player.model';
import { EndScreenComponent } from './end-screen/end-screen.component';
import { MonumentsComponent } from './monuments/monuments.component';
import { HavenFooterComponent } from './haven-footer/haven-footer.component';
import { HavenHeaderComponent } from './haven-header/haven-header.component';



@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    TravelComponent,
    GatherComponent,
    RestComponent,
    HealComponent,
    EndScreenComponent,
    MonumentsComponent,
    HavenFooterComponent,
    HavenHeaderComponent,

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
