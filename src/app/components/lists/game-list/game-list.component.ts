import { Component } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  gamesList: Game[];
  gamesNumber: number;

  constructor() {
    this.gamesList = [];
    this.gamesNumber = 1;
  }
}
