import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  @Input() order: Order;

  constructor() {
    this.order = {
      totalAmount: '',
      createdAt: new Date(),
      gameList: [],
    };
  }

  parseFloat(number: string): number {
    return parseFloat(number);
  }
}
