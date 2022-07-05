import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  logoutIcon = faRightFromBracket;
  ngOnInit() {}

  logoutUser() {
    sessionStorage.removeItem('loggedInUserData');
    this.router.navigate(['/login']);
  }
}
