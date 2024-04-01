import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated: boolean = true;
  private _userId:string ='abc'

  constructor() {}

  get userId():string{
    return this._userId
  }

  get UserAuthenticated(): boolean {
    return this._userIsAuthenticated;
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
