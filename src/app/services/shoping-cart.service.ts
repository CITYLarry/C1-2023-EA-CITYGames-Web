import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopingCartService {
  gamesShopingList: Game[];
  shopingCart: BehaviorSubject<Game[]>;
  shopingCart$: Observable<Game[]>;

  constructor() {
    this.gamesShopingList = [];
    this.shopingCart = new BehaviorSubject<Game[]>([]);
    this.shopingCart$ = this.shopingCart.asObservable();
  }

  addToCart(game: Game) {
    const existingGame = this.gamesShopingList.find(
      (g) => g.gameId === game.gameId
    );
    if (existingGame) {
      existingGame.quantity++;
    } else {
      game.quantity = 1;
      this.gamesShopingList.push(game);
    }
    this.shopingCart.next(this.gamesShopingList);
  }

  removeFromCart(gameId: string) {
    this.gamesShopingList = this.gamesShopingList.filter((value) => {
      return value.gameId !== gameId;
    });
    this.shopingCart.next(this.gamesShopingList);
  }

  findGameById(gameId: string) {
    return this.gamesShopingList.find((value) => {
      return value.gameId === gameId;
    });
  }

  totalCart() {
    return this.gamesShopingList.reduce((acc, game) => {
      return acc + game.quantity * parseFloat(game.price);
    }, 0);
  }

  cleanCart() {
    this.gamesShopingList = [];
    this.shopingCart.next(this.gamesShopingList);
  }
}
