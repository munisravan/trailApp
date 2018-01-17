import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { DasboardComponent } from './dasboard/dasboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { TemplateComponent } from './layout/template/template.component';
import { ShowPersonDataComponent } from './show-person-data/show-person-data.component';


const routes:  Routes =  [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: TemplateComponent,
    children: [{
      path: 'dashboard',
      component: DasboardComponent,
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasboardComponent,
    SidebarComponent,
    TopbarComponent,
    TemplateComponent,
    TopbarComponent,
    SidebarComponent,
    ShowPersonDataComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
