import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

constructor(public router:Router, public authService: AuthService){}

  title = 'Librera Search';
  
  doLogout(){   
    AuthService.prototype.doLogout.call(this);
    this.router.navigate(['/login']);
  }

  checkIsSignedIn() {
    return this.authService.isLoggedIn;
  } 
}
