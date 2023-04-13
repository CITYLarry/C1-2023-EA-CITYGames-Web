import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ɵafterNextNavigation } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss'],
})
export class PurchaseListComponent implements OnInit {
  ordersList: Order[];
  ordersNumber: number;

  constructor(
    private afAuth: AngularFireAuth,
    private customerService: CustomerService
  ) {
    this.ordersList = [];
    this.ordersNumber = 0;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.customerService.findCustomerByEmail(user.email).subscribe({
          next: (customer) => {
            this.ordersList = customer.orderList;
            this.ordersNumber = this.ordersList.length;
          },
          error: (err) => {
            console.error('Error on find customer by email');
          },
          complete: () => {},
        });
        return;
      }
      console.error('No user in session');
    });
  }
}
