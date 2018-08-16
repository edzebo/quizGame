import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor(private userServie: UserService) { }

  private user: User = this.userServie.user;

  ngOnInit() {
    const el = document.getElementById('logout');
    // tslint:disable-next-line:quotemark
    el.classList.remove("hide");
  }

}
