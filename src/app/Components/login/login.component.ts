import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public requireslogin=false;
  username: string;
  password: string;
    ngOnInit() {
    }
    login() : void {
      if(this.username == 'admin' && this.password == 'admin'){
        console.log("logged in");
        this.requireslogin=true;

        
      }else {
        alert("Invalid credentials");
      }
    }
    }

