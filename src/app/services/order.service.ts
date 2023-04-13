import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string;

  constructor(private httpclient: HttpClient) {
    this.url = 'http://localhost:8080/api/v1/orders';
  }

  saveOrder(order: Order): Observable<any> {
    return this.httpclient.post(this.url, order);
  }
}
