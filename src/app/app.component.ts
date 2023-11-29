import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'animaux';
  constructor (public authService: AuthService ,private router : Router) {}
  ngOnInit () {
    let isloggedin: string|null;
    let loggedUser:string|null;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
 OnLogout()
 {
  this.authService.logout();
 }
}
