import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService: AccountService,private router:Router

  ) { }
  
  model: User = new User();
  ngOnInit() {
  }

  login(form:NgForm){
  this.accountService.login(this.model);
  this.router.navigate(["home"]);
  }

}
