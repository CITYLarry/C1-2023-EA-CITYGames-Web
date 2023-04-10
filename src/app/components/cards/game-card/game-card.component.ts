import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() game: Game;

  constructor() {
    this.game = {
      gameId: '',
      title: '',
      yearRelease: '',
      edition: '',
      quantity: 0,
      available: false,
      categories: [],
    };
  }
}
