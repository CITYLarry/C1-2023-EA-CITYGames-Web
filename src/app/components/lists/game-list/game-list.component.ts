import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  pageSize: number;
  pageIndex: number;
  

  constructor(private gameService: GameService) {
    this.gamesList = [];
    this.gamesNumber = 0;

    this.pageSize = 6;
    this.pageIndex = 0;
  }

  ngOnInit(): void {
    this.gameService.getAll().subscribe({
      next: (data) => {
        this.gamesList = data;
        this.gamesNumber = this.gamesList.length;
      },
      error: (err) => console.error('Error getting games: ' + err),
      complete: () => {},
    });
  }
  
  onPageChange(event: any) {
    this.pageIndex = event - 1;
  }
}
