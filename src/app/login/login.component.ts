import { RegisterComponent } from './../register/register.component';
import { AuthenticateService } from './../shared/authenticate.service';
import { User } from './../shared/user';
import { Component, OnInit } from '@angular/core';
import { USERS_DB } from '../shared/usersDB';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router,
              private authenticate: AuthenticateService,
              private popup: MatDialog
            ) { }
  public user = new User('', '');
  public notInDatabase = false;

  ngOnInit() { }

  private checkForUser( user: User) {
    for (let i = 0; i < USERS_DB.length; i++) {
      if (USERS_DB[i].password === user.password && USERS_DB[i].username === user.username) {
        this.userService.user = this.user;
        this.authenticate.setLoggedIn(user);
        this.router.navigate(['/quiz']);
      } else {
        this.notInDatabase = true;
      }
    }
}
public registerUser() {
  this.popup.open(RegisterComponent, {
    width: '600px'
  });
}

}
