import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSession: boolean;
  searchValue: string;
  viewCart: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.isSession = false;

    this.searchValue = '';

    this.viewCart = false;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.isSession = !!user;
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
