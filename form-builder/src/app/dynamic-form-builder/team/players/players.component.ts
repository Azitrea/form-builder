import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  @Input() playerForm: FormGroup;
  @Input() index: number;
  @Output() deletePlayer: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deletePlayer.emit(this.index);
  }

}
