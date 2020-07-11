import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HelloUserComponent} from './hello-user.component';


const routes: Routes = [
  {
    path: '',
    component: HelloUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloUserRoutingModule { }
