import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  value: string;
  searchValue: BehaviorSubject<string>;
  searchValue$: Observable<string>;

  constructor() {
    this.value = '';
    this.searchValue = new BehaviorSubject<string>('');
    this.searchValue$ = this.searchValue.asObservable();
  }

  updateValue(value: string) {
    this.value = value;
    this.searchValue.next(this.value);
  }
}
