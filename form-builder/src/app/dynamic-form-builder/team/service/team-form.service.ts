import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeamForm } from '../models/team-form.model';
import { Team } from '../models/team.model';
import { PlayerForm } from '../players/models/player-form.model';
import { Player } from '../players/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamFormService {
  private teamForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(this.fb.group(new TeamForm(new Team('Cavaliers'))));

  teamForm$: Observable<FormGroup> = this.teamForm.asObservable();

  constructor(private fb: FormBuilder) { }

  addPlayer() {
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;

    currentPlayers.push(
      this.fb.group(
        new PlayerForm(new Player('', '', 0, ''))
      )
    );

    this.teamForm.next(currentTeam);
    console.log(this.teamForm.getValue());
  }

  deletePlayer(i: number) {
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;
    currentPlayers.removeAt(i);
    this.teamForm.next(currentTeam);
  }
}

