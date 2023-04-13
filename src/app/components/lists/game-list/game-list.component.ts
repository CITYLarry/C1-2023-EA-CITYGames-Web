import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';
import { SearchService } from '../../../services/search.service';
import { Observable } from 'rxjs';

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

  searchValue$: Observable<string>;

  constructor(
    private gameService: GameService,
    private searchSercive: SearchService
  ) {
    this.gamesList = [];
    this.gamesNumber = 0;

    this.pageSize = 6;
    this.pageIndex = 0;

    this.searchValue$ = searchSercive.searchValue$;
  }

  ngOnInit(): void {
    this.searchValue$.subscribe((value) => {
      if (value.trim() === '') {
        this.gameService.getAll().subscribe({
          next: (data) => {
            this.gamesList = data;
            this.gamesNumber = this.gamesList.length;
          },
          error: (err) => console.error('Error getting games: ' + err),
          complete: () => {},
        });
      } else {
        this.gameService.getAll().subscribe({
          next: (data) => {
            this.gamesList = data.filter((game: Game) => {
              return game.title.toLowerCase().startsWith(value.toLowerCase());
            });
            this.gamesNumber = this.gamesList.length;
          },
          error: (err) => console.error('Error getting games: ' + err),
          complete: () => {},
        });
      }
    });
  }

  onPageChange(event: any) {
    this.pageIndex = event - 1;
  }

  searchSonyGames() {
    this.gameService.getAllSonyGames().subscribe({
      next: (games) => {
        this.gamesList = games;
        this.gamesNumber = this.gamesList.length;
      },
      error: (err) => {
        console.error('Error on get sony games: ' + err);
      },
      complete: () => {}
    });
  }

  searchMicrosoftGames() {
    this.gameService.getAllMicrosoftGames().subscribe({
      next: (games) => {
        this.gamesList = games;
        this.gamesNumber = this.gamesList.length;
      },
      error: (err) => {
        console.error('Error on get Microsoft games: ' + err);
      },
      complete: () => {}
    });
  }

  searchPcGames() {
    this.gameService.getAllPcGames().subscribe({
      next: (games) => {
        this.gamesList = games;
        this.gamesNumber = this.gamesList.length;
      },
      error: (err) => {
        console.error('Error on get Pc games: ' + err);
      },
      complete: () => {}
    });
  }
}
