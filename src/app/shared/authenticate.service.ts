import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  private isLoggedIn: boolean;


  get loggedIn() {
    return this.isLoggedIn;
  }

  public setLoggedIn(user: User) {
    this.isLoggedIn = true;
  }


}

