import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate() {
    const isLogged = this.userService.isLogged();
    if (!isLogged) {
      this.router.navigate(['/login']);
    }
    return isLogged;
  }
}
