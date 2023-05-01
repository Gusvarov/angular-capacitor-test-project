import { Injectable } from '@angular/core';
import { AuthDto } from '../dtos/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginData: AuthDto = {
    username: 'admin',
    password: 'admin',
  }
  isLoggedIn: boolean = false;

  constructor() { }

  signIn(data: AuthDto) {
    // by default it should be handled by obvervables and http request, but i don't have any endpoint so i'll do it this way
    if (data.username === this.loginData.username && data.password === this.loginData.password) {
      this.isLoggedIn = true;
      return data;
    } else {
      return 'Wrong Credentials';
    }
  }

  editCredentials(data: AuthDto) {
    this.loginData = data;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
