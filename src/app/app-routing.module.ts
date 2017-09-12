import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamLineupComponent } from './team-lineup/team-lineup.component';

const routes: Routes = [
  { path: 'teamlineup', component: TeamLineupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
