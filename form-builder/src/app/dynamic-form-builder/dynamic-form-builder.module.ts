import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './team/players/players.component';



@NgModule({
  declarations: [TeamComponent, PlayersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormBuilderModule { }
