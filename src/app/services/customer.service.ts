import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url: string;

  constructor(private httpclient: HttpClient) {
    this.url = 'http://localhost:8080/api/v1/customers';
  }

  saveCustomer(customer: Customer): Observable<any> {
    return this.httpclient.post(this.url, customer);
  }

  findCustomerByEmail(email: string | null): Observable<any> {
    return this.httpclient.get(this.url + `/email/${email}`);
  }

  updateCustomer(customerId: string, customer: Customer): Observable<any> {
    return this.httpclient.put(`${this.url}/${customerId}`, customer);
  }
}
