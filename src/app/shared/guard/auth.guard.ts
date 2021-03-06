import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let loggedInUserData: string = JSON.parse(
      sessionStorage.getItem('loggedInUserData')
    );
    if (!loggedInUserData) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
