import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const isAuthenticated = localStorage.getItem('isloggedIn');

        if (!isAuthenticated) {
            return false;
        } else {
            return true;
        }
    }
}
