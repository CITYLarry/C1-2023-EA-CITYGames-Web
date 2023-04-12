import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { AuthService } from 'src/app/services/auth.service';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSession: boolean;
  searchValue: string;
  viewCart: boolean;
  cartBadget: number;
  shopingCart$: Observable<Game[]>;
  gamesShopingList: Game[];

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService,
    private shopingCart: ShopingCartService
  ) {
    this.isSession = false;

    this.searchValue = '';

    this.viewCart = false;

    this.cartBadget = 0;
    this.shopingCart$ = shopingCart.shopingCart$;
    this.gamesShopingList = [];
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isSession = !!user;
    });

    this.shopingCart.shopingCart$.subscribe((games) => {
      this.gamesShopingList = games;
      this.cartBadget = this.gamesShopingList.length;
    });
  }

  onToggleCart() {
    this.viewCart = !this.viewCart;
  }

  logOut() {
    this.authService
      .logout()
      .then(() => {})
      .catch((err) => console.error(err));
  }
}
