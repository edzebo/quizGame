import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    const el = document.getElementById('logout');
    const url = this.router.url;
    if (url === '/') {
      // tslint:disable-next-line:quotemark
      el.classList.add("hide");
    }
  }


}
