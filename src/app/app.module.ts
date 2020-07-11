import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import { HelloUserComponent } from './modules/hello-user/hello-user.component';
import {FormBuilder} from '@angular/forms';
import {UserGuardService} from './services/guards/user-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/hello-user/hello-user.module').then(m => m.HelloUserModule),
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
