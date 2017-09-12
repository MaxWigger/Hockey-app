import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamLineupModule } from './team-lineup/team-lineup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamLineupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
