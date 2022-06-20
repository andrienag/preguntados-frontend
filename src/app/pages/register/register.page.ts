import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  error = null;
  email = '';
  name = '';
  surName = '';
  password = '';
  loading = false;

  constructor(private userService: UserService, private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  clear() {
    this.email = '';
    this.name = '';
    this.surName = '';
    this.password = '';
    this.loading = false;
  }

  register() {
    this.loading = true;
    this.error = null;
    const response = this.userService.register(
      this.email,
      this.name,
      this.surName,
      this.password
    );
    response.subscribe({
      next: () => {
        this.clear();
        this.goToLogin();
      },
      error: ({ message, response }) => {
        if (response && response.error) {
          this.error = response.error;
        } else {
          this.error = message;
        }
        this.loading = false;
      },
    });
  }
}
