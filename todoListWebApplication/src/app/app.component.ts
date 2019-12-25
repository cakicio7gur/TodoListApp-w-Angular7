import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoListWebApplication';
  constructor(
    private accountService: AccountService
  ) { }
  
  isLoggedin() {
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
  }
}
