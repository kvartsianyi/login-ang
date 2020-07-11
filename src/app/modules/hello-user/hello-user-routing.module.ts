import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloUserComponent} from './hello-user.component';
import {UserGuardService} from '../../services/guards/user-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HelloUserComponent,
    canActivate: [UserGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloUserRoutingModule { }
