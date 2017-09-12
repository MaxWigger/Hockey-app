import { Component, OnInit } from '@angular/core';
import { Member } from '../model/member';

@Component({
  selector: 'app-team-lineup',
  templateUrl: './team-lineup.component.html',
  styleUrls: ['./team-lineup.component.css']
})
export class TeamLineupComponent implements OnInit {

  members: Member[] = [];

  constructor() {
  }

  ngOnInit() {
    this.members = [
      new Member("Max"),
      new Member("Michael"),
    ]
  }

}
