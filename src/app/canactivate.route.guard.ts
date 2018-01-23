import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const isAuthenticated = localStorage.getItem('isloggedIn');

        if (!isAuthenticated) {
            this.router.navigate(['/login'], {
                queryParams: {
                  return: state.url
                }
              });
         
        } else {
            return true;
        }  
         return false;
    }
}
