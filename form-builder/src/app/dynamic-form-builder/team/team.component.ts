import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TeamFormService } from './service/team-form.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  teamForm: FormGroup;
  players: FormArray;

  teamFormSub: Subscription;

  constructor(private teamFormService: TeamFormService) { }
  ngOnInit() {
    this.teamFormSub = this.teamFormService.teamForm$
      .subscribe(team => {
        this.teamForm = team;
        this.players = this.teamForm.get('players') as FormArray;
      });
  }

  addPlayer() {
    this.teamFormService.addPlayer();
  }

  deletePlayer(index: number) {
    this.teamFormService.deletePlayer(index);
  }

  saveTeam() {
    console.log('team saved!');
    console.log(this.teamForm.value);
  }

  ngOnDestroy() {
    this.teamFormSub.unsubscribe();
  }
}
