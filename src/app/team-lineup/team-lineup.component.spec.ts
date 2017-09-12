import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLineupComponent } from './team-lineup.component';

describe('TeamLineupComponent', () => {
  let component: TeamLineupComponent;
  let fixture: ComponentFixture<TeamLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
