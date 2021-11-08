import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from './models/usuario';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  usuario : IUsuario = { 
    email: 'alex.hotmail.com', username: '', password: 'alex'};
  constructor(private authService: AuthService, public router: Router) { 

  }

  ngOnInit(): void {
  }


  login(){
    console.log('this is the user in component ')
    console.dir(this.usuario)
    this.authService.login(this.usuario).subscribe((data: {}) => {
      this.router.navigate(['/product'])
    });
  }

}
