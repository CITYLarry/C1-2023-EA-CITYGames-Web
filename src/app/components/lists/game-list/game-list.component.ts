import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  gamesList: Game[];
  gamesNumber: number;

  constructor(private gameService: GameService) {
    this.gamesList = [];
    this.gamesNumber = 1;
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => console.error('Error getting games: ' + err),
      complete: () => {},
    });
  }
}
