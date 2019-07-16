import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  //Adding router - Dependency Injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username);
    if(this.username==='anusha' && this.password==='1234') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
