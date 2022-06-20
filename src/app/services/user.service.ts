import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RequestService } from './request.service';
import { StorageService } from './storage.service';

interface IUser {
  token: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user = new BehaviorSubject<IUser>(null);

  constructor(
    private requestService: RequestService,
    private storageService: StorageService
  ) {}

  getUser() {
    const data = this.storageService.get(environment.user_key);
    if (!data) return;
    this._user.next(data);
    return this._user.getValue();
  }

  isLogged() {
    return !!this.getUser();
  }

  logout() {
    this.storageService.clear(environment.user_key);
  }

  login(email: string, password: string) {
    const response = this.requestService.send({
      endpoint: 'auth/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    });

    response.subscribe(({ response }) => {
      if (response) {
        this.storageService.set(environment.user_key, response);
      }
    });

    return response;
  }

  register(email: string, name: string, surName: string, password: string) {
    return this.requestService.send({
      endpoint: 'auth/register',
      method: 'POST',
      body: {
        email,
        name,
        surName,
        password,
      },
    });
  }
}
