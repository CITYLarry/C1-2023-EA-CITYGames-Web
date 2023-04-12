import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() game: Game;

  constructor(private shopingCart: ShopingCartService) {
    this.game = {
      gameId: '',
      title: '',
      price: '',
      edition: '',
      quantity: 0,
      available: false,
      categories: [],
    };
  }

  addToCart(game: Game) {
    return this.shopingCart.addToCart(game);
  }
}
