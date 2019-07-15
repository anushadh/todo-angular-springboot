import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= 'anusha'
  password= ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username);
    if(this.username==='anusha' && this.password==='1234') {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
