import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  error = null;
  email = '';
  password = '';
  loading = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    if (this.userService.isLogged()) {
      this.goToMenu();
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  clear() {
    this.email = '';
    this.password = '';
    this.loading = false;
  }

  login() {
    this.loading = true;
    this.error = null;
    const response = this.userService.login(this.email, this.password);
    response.subscribe({
      next: () => {
        this.clear();
        this.goToMenu();
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
