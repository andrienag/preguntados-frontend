import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get(key: string) {
    const value = localStorage.getItem(key);
    if (!value) return;
    return JSON.parse(value);
  }

  set(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    localStorage.removeItem(key);
  }
}
