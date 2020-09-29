import { Player } from '../players/models/player.model';

export class Team {
  constructor(
    public name: string,
    public players?: Player[]
  ) {}

}
