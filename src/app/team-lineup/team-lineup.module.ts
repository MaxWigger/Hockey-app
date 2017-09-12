import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamLineupRoutingModule } from './team-lineup-routing.module';
import { TeamLineupComponent } from './team-lineup.component';

@NgModule({
  imports: [
    CommonModule,
    TeamLineupRoutingModule
  ],
  declarations: [TeamLineupComponent]
})
export class TeamLineupModule { }
