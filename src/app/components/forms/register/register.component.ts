import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  registerForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.registerForm = new FormGroup({
      email: this.emailFormControl,
      password: this.passwordFormControl,
    });
  }

  onSubmit() {
    this.customerService.saveCustomer(this.registerForm.value).subscribe({
      next: () => {},
      error: (err) => {
        console.error('Error on save customer: ' + err);
      },
      complete: () => {},
    });

    this.authService
      .register(this.registerForm.value)
      .then((response) => {
        this.router.navigate(['/home']);
      })
      .catch((err) => console.error(err));
  }
}
