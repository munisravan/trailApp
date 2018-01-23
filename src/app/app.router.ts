import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';

import { CanActivateRouteGuard } from './canactivate.route.guard';

export const routes:  Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DasboardComponent,
        canActivate: [CanActivateRouteGuard]
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
