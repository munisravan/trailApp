import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';

import { CanActivateRouteGuard } from './canactivate.route.guard';
import { TemplateComponent } from './layout/template/template.component';

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
        path: '',
        component: TemplateComponent,
        canActivate: [CanActivateRouteGuard],
        children: [
            {
                path: 'dashboard',
                component: DasboardComponent,
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
