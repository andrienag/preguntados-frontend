import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { environment } from 'src/environments/environment';

import { StorageService } from './storage.service';

interface IRequestOptions {
  endpoint: string;
  method?: string;
  headers?: Headers;
  body?: string | object;
}

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private storageService: StorageService) {}

  send(options: IRequestOptions) {
    const data = this.storageService.get(environment.user_key);
    let authHeaders: Headers;

    if (data) {
      authHeaders = new Headers();
      authHeaders.append('Authorization', `Bearer ${data.token}`);
    }

    const response = ajax({
      url: environment.server + options.endpoint,
      method: options.method ?? 'GET',
      headers: {
        'Content-Type': 'application/json',
        'rxjs-custom-header': 'Rxjs',
        ...authHeaders,
        ...options.headers,
      },
      body: options.body,
    });

    return response;
  }
}
