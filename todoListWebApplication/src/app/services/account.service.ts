import { Injectable } from '@angular/core';
import { User } from '../components/login/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {

  constructor(private router: Router, private _snackBar: MatSnackBar, private http: HttpClient) { }


  loggedIn = false;
  loginIn = false;
  openSnackBar(message: string) {
    this._snackBar.open(message, "✓", {
      duration: 2000,
    });
  }
  openSnackBars(message: string) {
    this._snackBar.open(message, "X", {
      duration: 2000,
    });
  }

  login(user: User): boolean {
    if (user.userName == "cakicio7gur" && user.password == "123456") 
    {
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName);
      this.openSnackBar("Kullanıcı Girişi Başarılı");
      return true;
    }
    this.openSnackBars("Hatalı Bilgi Girişi!");
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
    this.openSnackBar("Çıkış Başarılı");
    this.router.navigate(["homepage"]);
  }
}