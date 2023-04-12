import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/api/v1/games';
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
