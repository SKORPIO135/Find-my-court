import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  

  constructor(public authService:AuthenticationServiceService, public auth:AngularFireAuth) { }

  ngOnInit() {
  }
  
  login() {
    this.authService.login(this.email, this.password)
    console.log(this.email,this.password)
    //("make new")
  }

}
