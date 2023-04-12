import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent {

  shopingCart$: Observable<Game[]>;

  constructor(private shopingCart: ShopingCartService) {
    this.shopingCart$ = shopingCart.shopingCart$;
  }

  totalGame(price: string, units: number) {
    return parseFloat(price) * units;
  }

  totalCart() {
    return this.shopingCart.totalCart();
  }

  removeGame(gameId: string) {
    return this.shopingCart.removeFromCart(gameId);
  }

  updateUnits(operation: string, gameId: string) {
    var game = this.shopingCart.findGameById(gameId);
    if (game) {
      if (operation === "substract" && game.quantity > 0) {
        game.quantity -= 1;
      }
      if (game.quantity == 0) {
        this.removeGame(gameId)
      }
      if (operation === "add") {
        game.quantity += 1;
      }
    }
  }
}
