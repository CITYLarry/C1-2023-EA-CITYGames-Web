import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { ShopingCartService } from 'src/app/services/shoping-cart.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
})
export class ShopingCartComponent {
  shopingCart$: Observable<Game[]>;
  isSession: boolean;

  constructor(
    private shopingCart: ShopingCartService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private customerService: CustomerService,
    private orderService: OrderService
  ) {
    this.shopingCart$ = shopingCart.shopingCart$;

    this.isSession = false;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isSession = !!user;
    });
  }

  totalGame(price: string , units: number) {
    return (parseFloat(price) * units).toFixed(2);
  }

  totalCart() {
    return this.shopingCart.totalCart().toFixed(2);
  }

  removeGame(gameId: string) {
    return this.shopingCart.removeFromCart(gameId);
  }

  updateUnits(operation: string, gameId: string) {
    var game = this.shopingCart.findGameById(gameId);
    if (game) {
      if (operation === 'substract' && game.quantity > 0) {
        game.quantity -= 1;
      }
      if (game.quantity == 0) {
        this.removeGame(gameId);
      }
      if (operation === 'add') {
        game.quantity += 1;
      }
    }
  }

  onBuy() {
    if (!this.isSession) {
      this.router.navigate(['/login']);
      return;
    }
    confirm('Are you sure you want to proceed with this purchase?');
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.customerService.findCustomerByEmail(user.email).subscribe({
          next: (customer) => {
            var newOrder: Order = {
              totalAmount: this.totalCart().toString(),
              createdAt: new Date(),
              gameList: this.shopingCart.gamesShopingList,
            };

            this.orderService.saveOrder(newOrder).subscribe({
              next: (order) => {
                customer.orderList.push(order);

                this.customerService
                  .updateCustomer(customer.customerId, customer)
                  .subscribe({
                    next: (data) => {
                      alert('Purchase successfully completed');
                      this.shopingCart.cleanCart();
                      this.router.navigate(['/purchases']);
                    },
                    error: (err) => {
                      console.error('Error on complete purchase: ' + err);
                    },
                    complete: () => {},
                  });
              },
              error: (err) => {
                console.error('Error on create order: ' + err);
              },
              complete: () => {},
            });
          },
          error: (err) => {
            console.error('Error on find user: ' + err);
          },
          complete: () => {},
        });
      }
    });
  }
}
